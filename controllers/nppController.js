const express = require('express')
const router = express.Router();
var nppService = require('../middleware/nppService')

router.post('/npp/pushFarmersBenefitedDetails/:clientId/:password', (req, res) => nppService.farmerAPIHandler(req, res))
router.post('/npp/pushFarmerRegistrationData/:clientId/:password', (req, res) => nppService.farmerAPIHandler(req, res))

module.exports = router
