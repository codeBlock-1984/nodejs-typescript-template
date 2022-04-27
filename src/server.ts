import http from 'http';
import config from './config';

import appLoader from './app';

/* eslint-disable no-console */

/**
 * Creates and starts the server
 * @returns {Promise} - 
 */
const startServer = async (): Promise<void> => {
  try {
    const port = config.app.port;
    const app = await appLoader();
    const server = http.createServer(app);

    server.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(`App failed to start: ${error.message}`);
  }
};

startServer();
