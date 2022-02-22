const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sssaysssay:chang525@mongolearn.vinaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => console.log('mongo db connected')).catch(err => console.log(err))

app.get('/',(req,res) => res.send('Hello'))

app.listen(port, () => console.log(`${port}`))