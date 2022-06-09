
const express = require('express')
const bodyParser = require('body-parser')
// import api router
const apiRoute =  require('./routes')
const mongoDbProvider = require('./models/mongodbProvider')
const { clearCookie } = require('express/lib/response')
const cors  = require('cors')
const app = express()
require('dotenv').config()

const port = 8000

app.use(bodyParser.json())

app.use(express.json())

app.use(cors())



//  sử dung router
app.use('/api', apiRoute)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




