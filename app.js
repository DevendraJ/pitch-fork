const express = require('express')
const router = express.Router()

const app = express()
app.use('/*', express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use(require('./controllers'))

var port = 3000
app.listen(port, () => console.log(`pitch-fork listening on port ${port}!`))