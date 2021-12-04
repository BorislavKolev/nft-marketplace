const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/nft-marketplace')
    .then(() => {
        console.log('DB Connected.')
    });

mongoose.connection.on('error', (error) => {
    console.log('DB Error: ', error)
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.json({text: 'The server is working!'})
});

app.listen(3030, () => console.log('Server is running on port 3030.'));