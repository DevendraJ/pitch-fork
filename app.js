const express = require('express')
const os = require('os')
const fs = require('fs')
const router = express.Router()

const app = express()
app.use('/*', express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

var port = 3000
app.listen(port, () => console.log(`pitch-fork listening on port ${port}!`))

router.get('/*', (req, res) => handler(req, res))

router.post('/npp/farmerRegistrationData', (req, res) => handleFarmerRegistrationDataImport(req, res))

function handler(req, res) {
	var logFile = fs.createWriteStream(os.homedir() + '/pitch-fork-log.txt', { flags: 'a' });
	var endPoint = req.originalUrl
	var clientId = req.header('clientId')
	logFile.write('\napp used at ' + new Date())
	res.send('Hello World!')
}

function handleFarmerRegistrationDataImport(req, res) {
	var logFile = fs.createWriteStream(os.homedir() + '/pitch-fork-log.txt', { flags: 'a' });
	var headers = req.headers
	var body = req.body
	var dateTime = new Date()
	var clientId;

	var { "transaction_id": transactionId, "authorization": auth } = headers
	if (auth) {
		auth = auth.split(' ')[1]
		clientId = Buffer.from(auth, 'base64').toString()
		clientId = clientId.split(':')[0]
	}

	var response = {
		"client_id": clientId,
		"transaction_id": transactionId,
		"ack_id": transactionId,
		"service_code": "farmer_reg_api",
		"transaction_status": "S",
		"transaction_remarks": "Success",
		"transaction_start_date": dateTime,
		"transaction_end_date": dateTime,
		"row_affected": 1,
		"response_code": 200,
		"response_desc": "Success"
	};

	logFile.write('\n\n=====================================' + dateTime + '=====================================');
	logFile.write('\nAPI: Farmers Registration')
	logFile.write('\nRequest Headers:\n' + JSON.stringify(headers, null, '\t'))
	logFile.write('\nRequest Body:\n' + JSON.stringify(body, null, '\t'))
	logFile.write('\nResponse Body:\n' + JSON.stringify(response, null, '\t'))
	logFile.write('\n=================================================================================================================')
	res.send(response)
}

