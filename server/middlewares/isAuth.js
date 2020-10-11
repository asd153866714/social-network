module.exports = (ctx, next) => {
    if (ctx.session.isLogin !== true) {
        return ctx.status = 401
    }
    return next()
}