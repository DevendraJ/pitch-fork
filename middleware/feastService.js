const fs = require('fs')
const os = require('os')

exports.feastAPIHandler = function (req, res) {
    var logFile = fs.createWriteStream(os.homedir() + '/pitch-fork-log.txt', { flags: 'a' });
    var body = req.body
    var tokenNO = body["tokenNO"]
    var date = new Date()
    var acknowledgementID = `${date.getDate()}${(date.getMonth() + 1)}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
    var response = {
        "tokenNO": tokenNO,
        "respCode": "0",
        "respMessage": "Success",
        "acknowledgementID": acknowledgementID
    }

    logFile.write('\n\n=====================================' + date + '=====================================');
    logFile.write('\nAPI: FEAST')
    logFile.write('\nRequest Body:\n' + JSON.stringify(body, null, '\t'))
    logFile.write('\nResponse Body:\n' + JSON.stringify(response, null, '\t'))
    logFile.write('\n=================================================================================================================')
    res.send(response)
}