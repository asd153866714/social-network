const User = require('../models/user')
const bcrypt = require('bcryptjs')
const app = require('../server.js')

module.exports = {
    postLogin: async (ctx) => {
        let { email, password } = ctx.request.body
        let hasUser = await User.findOne({ email: email })
        try {
            if (hasUser && bcrypt.compareSync(password, hasUser.password)) {
                ctx.session = {
                    isLogin: true,
                    user: hasUser
                }
                ctx.status = 200
                ctx.body = {
                    message: "Login success."
                }
            } else {
                ctx.throw(400, 'Invalid email or password.')
            }

        } catch (err) {
            ctx.status = err.statusCode || 500
            ctx.body = {
                message: err.message
            }
        }
    },
    postSignup: async (ctx) => {
        let { email, name, password } = ctx.request.body
        try {
            let hasUser = await User.findOne({ email, email })
            if (hasUser) {
                ctx.throw(400, 'Email has been use!')
            }
            let newUser = new User({
                email: email,
                name: name,
                password: bcrypt.hashSync(password, 12),
            })
            await newUser.save()
            ctx.status = 201
            ctx.body = {
                "message": "Sign up successfully"
            }

        } catch (err) {
            ctx.status = err.statusCode || 500
            ctx.body = {
                message: err.message
            }
        }
    },
    postLogout: async (ctx) => {
        ctx.session = null
        console.log(ctx.session)
        console.log(ctx.cookies.get)
        ctx.status = 204
    }
}