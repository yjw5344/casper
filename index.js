const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "/source"));
app.use(cors({
    orgin: '*',
}));

app.get('/', (req,res) => {    
    res.sendFile(path.join(__dirname, "source", "index.html"));
});

app.get('/main', (req,res) => {    
    res.sendFile(path.join(__dirname, 'source', 'main.html'));
});

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);    
});