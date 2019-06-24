const express = require('express')
const controller = require('../controllers/rss')
const router = express.Router()


router.get('', controller.rss)
router.get('/rss', controller.rssTwo)


module.exports = router
