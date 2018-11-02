const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../db/');
// const router = require('../smtp-server/routes/index.js');

const app = express();
const PORT = process.env.PORT || 9001;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../build/')));

app.get(' * ', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/dist/index.html'))
});

// app.use('/api', router);

app.listen(PORT, () => console.log(`Successfully connected to PORT: ${PORT}`));