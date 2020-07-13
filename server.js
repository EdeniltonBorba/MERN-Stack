const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/', function (req, res) {
    res.json({ message: 'Hello World' });
});

app.listen(PORT, function () {
    console.log(`Server now listening on PORT ${PORT}!`)
})
