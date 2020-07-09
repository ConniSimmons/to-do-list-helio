const express = require('express');

const app = express();

app.listen(3729, (err) => {
    if (err) {
        console.log('Error starting server: ', err);
    }
    console.log('Server listening on port 3729.');
})