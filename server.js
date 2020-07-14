const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mern-stack', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('MongoDB successfully connected.')
    }
});

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function (req, res) {
    res.json({ message: 'Hello World' });
});

app.use(routes);

app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`)
})
