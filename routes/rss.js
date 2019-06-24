const express = require('express')
const controller = require('../controllers/rss')
const router = express.Router()


router.use('', controller.rss)


module.exports = router
