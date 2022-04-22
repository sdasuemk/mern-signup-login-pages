const express = require('express');
const { appendFile } = require('fs');
const mongoose = require('mongoose');

//express app initialization
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose.connect('mongodb+srv://HeroVired:abcd@heroviredreact.6lmkh.mongodb.net/Car_rental_app?retryWrites=true&w=majority')
.then(()=> console.log('success'))
.catch(()=> console.log('Error'))

//Application route
app.use('/user', userHandler);

//Listing port
app.listen(3000, ()=> {
    console.log('listining at port 3000!')
});