const express = require('express');

const app = express();



app.get('/', (req, res, next) => {
    res.send('This works.');
});

// just adding a new comment to push to github.

app.listen(3729, (err) => {
    if (err) {
        console.log('Error starting server: ', err);
    }
    console.log('Server listening on port 3729.');
})
