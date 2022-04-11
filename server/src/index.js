const express = require('express')
const app = express()

require('./database')
app.use(require('./routes/index.routes'))

app.listen(3001)
console.log('Server listening on port',3001);