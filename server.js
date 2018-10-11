const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 9001;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public/dist')));


app.listen(PORT, () => console.log(`Successfully connected to PORT: ${PORT}`));