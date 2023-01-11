const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 80;

app.use(express.static(__dirname + "/source"));
app.use(cors({
    orgin: '*',
}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});