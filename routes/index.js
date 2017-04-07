var express = require('express');
var router = express.Router();
var path = require('path');
var fcmService = require(path.join(__dirname, '..', 'service', 'fcmService'));

/* GET home page. */
router.post('/send', fcmService.messagePass);

module.exports = router;