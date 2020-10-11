const AuthController = require('../controllers/auth')

const Router = require('koa-router')
const router = new Router()

router
    .post('/api/auth/signup', AuthController.postSignup)
    .post('/api/auth/login', AuthController.postLogin)
    .post('/api/auth/logout', AuthController.postLogout)

module.exports = router