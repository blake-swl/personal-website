import express from 'express';
import path from 'path';
import parser from 'body-parser';

const app = express();
const PORT = 9001;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./public/dist")));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
})

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)); 