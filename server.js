const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')
const authUser = require('./routes/authUser')
const items = require('./routes/items')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.connect(config.mongoUri, {useNewUrlParser: true})
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use(express.static('public'))

app.use('/', authUser)
app.use('/', items)

app.listen(config.port, (err) => {
    if(err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})