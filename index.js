const express = require('express')

require('./config/database')

let app = express()

app.get('/', require('./controllers/get'))
app.get('/put/:data', require('./controllers/post'))

app.listen(1207)
