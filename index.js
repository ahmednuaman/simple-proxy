const express = require('express')
const request = require('request')

const app = express()
const target = process.env.TARGET

app.get('/', (req, res) => request.get(target).pipe(res))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
