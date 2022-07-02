const connectToMongo= require('./db');
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
app.use(express.json());

connectToMongo();

app.use('/check',require('./routes/tocheck'))
// app.use('/check',require('./routes/notes'))



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
