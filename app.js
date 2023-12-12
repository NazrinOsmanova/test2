const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.error(err);
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});