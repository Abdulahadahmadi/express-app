const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/messages', (req, res) => {
    res.send({
        id: 1,
        message: 'Hello World!'
    })
})

app.post('/messages', (req, res) => {
    console.log('updating messages')
})

app.listen(PORT, () => {
    console.log(`Listening to POST ${PORT}`);
})