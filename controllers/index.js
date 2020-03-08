const express = require('express')
const router = express.Router()

router.use(require('./nppController'))

module.exports = router