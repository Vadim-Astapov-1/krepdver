const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(3000);
