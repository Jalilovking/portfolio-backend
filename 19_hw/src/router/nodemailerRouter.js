const Router = require('express')
const router = new Router()
const nodemailerController = require('../controllers/nodemailerController')

router.post('/', nodemailerController())

module.exports = router