const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const catagoris = require("./data/Catagoris.json")
var cors = require('cors')

app.get('/', (req, res) => {
  res.send('my name is qubra')
})

app.use(cors()) 

app.get('/catagoris', (req, res) =>{
  res.send(catagoris)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  