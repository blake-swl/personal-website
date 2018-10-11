import { createServer } from 'http';
import { success } from './lib'

import App from './config';

const app = App.express;

const server = createServer( app );
const PORT = process.env.PORT || 9001;

server.listen( PORT, err => {
  if (err) {
    throw new Error;
  }
  success(`Server is now listening on PORT: ${PORT}`);
});

export default server;