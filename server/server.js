const Koa = require('koa')
const app = new Koa()

const koaBody = require('koa-body')
const koaLogger = require('koa-logger')
const serve = require('koa-static')
const session = require('koa-session')
const mongoose = require('mongoose')
const cors = require('@koa/cors')

require('dotenv').config()
const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

// Init middleware
app.use(cors())
app.use(koaBody())
app.use(koaLogger())

// Set cookie for session
app.keys = ['*@&))9kdjafda;983']
const CONFIG = {
  maxAge: 86400000
}
app.use(session(CONFIG, app))

// Init routes
const authRoutes = require('./routes/auth')

app.use(authRoutes.routes())

// Connect to database
mongoose.connect(DB_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

// Server start listen
app.listen(PORT, () => console.log(`Server run at http://localhost:${PORT}`))

module.exports = app