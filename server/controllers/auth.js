const User = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = {
    postLogin: async (ctx) => {
        try {
            let { email, password } = ctx.request.body
            let hasUser = await User.findOne({ email: email })
            if (!hasUser) {
                ctx.session.message = 'Invalid email or password.'
                return ctx.status = 400
            }
            if (bcrypt.compareSync(password, hasUser.password)) {
                ctx.session.isLogin = true
                ctx.session.user = hasUser

                return ctx.status = 200
            }
        } catch (err) {
            ctx.status = err.statusCode || 500
            ctx.body = {
                message: err.message
            }
        }
    },
    postSignup: async (ctx) => {
        try {
            let { email, name, password } = ctx.request.body
            let hasUser = await User.findOne({ email, email })
            if (hasUser) {
                ctx.session.msg = 'email has been use!'
                return ctx.body = {
                    message: ctx.session.msg
                }
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
        ctx.status = 204
    }
}