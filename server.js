import express from 'express';
import path from 'path';
import parser from 'body-parser';

const app = express();
const PORT = 9000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./public/dist")));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)); 