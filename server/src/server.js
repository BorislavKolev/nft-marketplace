const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.json({text: 'The server is working!'})
});

app.listen(3030, () => console.log('Server is running on port 3030'));