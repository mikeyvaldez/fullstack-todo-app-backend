const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.set('strictQuery', true); // to get rid of the warning in terminal
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB...`))
  .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
