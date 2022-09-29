const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

const clientRoute = require('./routes/clients')

const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, (err) => {
    if(err) console.log(err) 
    else console.log("mongdb is connected");
   })
// Middleware 

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/', (req,res) => {
    res.send("Welcome to homepage!")
})

app.use('/api/clients', clientRoute)

app.listen(8800, 
    console.log("Backend server is running!")
)