const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')

router.get('/', (req, res) => {
    res.render('index')
})
router.post('/', messageController.messages)

module.exports = router