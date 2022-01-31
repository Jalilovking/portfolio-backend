const Router = require('express')
const router = new Router()
const messageRouter = require('./router/messageRouter')
const nodemailerRouter = require('./router/nodemailerRouter')

router.use(messageRouter)
router.use(nodemailerRouter)

module.exports = router