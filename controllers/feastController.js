const express = require('express')
const router = express.Router();
const feastService = require('../middleware/feastService')

router.post('/feast/*', (req, res) => feastService.feastAPIHandler(req, res))

module.exports = router