const express = require('express')
const router = express.Router()

router.use(require('./nppController'))
router.use(require('./feastController'))

module.exports = router

var restCaller = require('../middleware/service')
restCaller.callRestAPI();