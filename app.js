const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(5000);
console.log("server running on port 127.0.0.1:5000")