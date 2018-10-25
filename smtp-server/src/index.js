import express from 'express';
import router from '../routes/index';


const app = express();

const PORT = 8080;

app.use('/api', router);

app.listen(PORT, () => console.log(`Successfully connected to PORT: ${PORT}`));