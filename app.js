const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello CNB: Node.js with express!!')
})

app.listen(3000, '0.0.0.0', () => {
  console.log('Example app listening at http://0.0.0.0:3000')
})