const express = require('express');
const dishes = require('../backend/routes/dishesRoutes');
const registerUser = require('../backend/routes/userRoutes')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(()=>console.log('Connected'))

const app = express();
const port = 3001;
app.use(express.json())

app.use('/api',dishes)

app.use((req,res,next)=>{
    console.log("Time: ",Date.now());
    next();
});

app.use('/api',registerUser)

app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})