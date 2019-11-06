const express = require('express')
const os = require('os');
var fs = require('fs')
var bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = 3000
const logFile = fs.createWriteStream(os.homedir() + '/pitch-fork-log.txt', { flags: 'a' });

app.get('/*', (req, res) => handler(req, res))

app.post('/*', (req, res) => handler(req, res))

app.listen(port, () => console.log(`pitch-fork listening on port ${port}!`))

function handler(req, res) {
     var endPoint = req.originalUrl
     var clientId = req.header('clientId')
     var clientPassword = req.header('clientPassword')
     var payLoad = req.body

     validateCredentials(clientId, clientPassword)

     logFile.write('\n---------------\n')
     logFile.write('calledAt: ' + JSON.stringify(new Date()) + '\n')
     logFile.write('requestUrl: ' + endPoint + '\n')
     logFile.write('clientId:' + clientId + '\n')
     logFile.write('clientPassword: ' + clientPassword + '\n')
     logFile.write('requestPayload: \n' + JSON.stringify(payLoad, null, '\t') + '\n')

     res.send('Hello World!')
}

function validateCredentials(clientId, clientPassword) {

}

// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters