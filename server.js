const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')

const authUser = require('./routes/authUser')
const courses = require('./routes/courses')
const categories = require('./routes/categories')
const subCategories = require('./routes/subCategories')
const items = require('./routes/items')
const plans = require('./routes/plans')

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

// Use Routes
app.use('/', authUser)
app.use('/', courses)
app.use('/', categories)
app.use('/', subCategories)
app.use('/', items)
app.use('/', plans)

app.listen(config.port, (err) => {
    if(err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})