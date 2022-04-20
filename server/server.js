require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require ('body-parser');
const PORT = 3000;



app.get('/', (req, res) => {
    res.send("Check Check Check")
})

app.get()

app.listen(PORT, () => {
    console.log(`Local Test Server is live. connected at http://localhost:${PORT}`);
})