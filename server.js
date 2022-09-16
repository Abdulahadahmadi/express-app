const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'ahad',
    },
    {
        id: 1,
        name: 'Jane',
    }

];

app.use((req, res, next) => {
    const start = new Date().now();
    
    next();
    // actions go here...
    const delta = Date().now() - start;
    console.log(`${req.method} request for '${req.url}`);
});

app.get('/friends', (req, res) => {
    res.json(friends);

})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend) {
        res.status(200).json(friend);
    }else {
        res.status(404).json({message: 'Not found'});
        error: 'Friends not found'
    }
})


app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Ahad!</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('updating messages')
})

app.listen(PORT, () => {
    console.log(`Listening to POST ${PORT}`);
})