const express = require('express')
const router = express.Router();
var nppService = require('../middleware/nppService')

router.post('/npp/farmerRegistrationData', (req, res) => nppService.farmerAPIHandler(req, res))

module.exports = router