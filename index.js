const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mongoose = require('mongoose')

const conUrl = "mongodb+srv://mo=majority";
mongoose.connect(url, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})

app.get('/', (req, res) => {
  res.send('Hello World!')
}).then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
