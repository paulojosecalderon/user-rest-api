const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.port || 5001;

app.get('/', (req,res)=>{
    res.send('Initial GET request')
})


app.listen(PORT, ()=>{
    console.log(`Server at http://localhost:${PORT}`)
});
