const express = require('express');
const app = express();
const PORT = 80;

app.use(express.static(__dirname + "/public"));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});