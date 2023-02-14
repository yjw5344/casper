const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const hls = require('hls-server');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "/source")));
app.use(cors({
    orgin: '*',
}));

app.get('/', (req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "source", "index.html"));
});

app.get('/main', (req,res) => {
    console.log("/main : " + path.join(__dirname, ""))
    res.sendFile(path.join(__dirname, 'source', 'main.html'));    
});

const server = app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);    
});