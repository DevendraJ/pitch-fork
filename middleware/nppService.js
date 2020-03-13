const fs = require('fs')
const os = require('os')

exports.farmerAPIHandler = function (req, res) {
	var logFile = fs.createWriteStream(os.homedir() + '/pitch-fork-log.txt', { flags: 'a' });
    var headers = req.headers
    var body = req.body
    var dateTime = new Date()
    var clientId;

	var { "transaction_id": transactionId} = headers
	var clientId = req.params.clientId

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
