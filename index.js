const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.port || 5001;
const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use('/api/user', userRoutes)


app.listen(PORT, ()=>{
    console.log(`Server at http://localhost:${PORT}`)
});
