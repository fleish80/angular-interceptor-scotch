const express = require('express');
const app = express();
const port = 3070;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/login', (req, res) => {
    res.send({x: 1});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});