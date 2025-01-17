import dotenv from 'dotenv';
import http from 'http';
import config from 'config';
import path from 'path';
import app, { initializeRoute } from '@/app';
import logger from '@/utils/logger';
import connectToDB from '@/db';

export const server: http.Server = http.createServer(app);

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Load environment variables from the back-end workspace .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = config.get('port') || 4000;

// eslint-disable-next-line no-extend-native, func-names
BigInt.prototype.toJSON = function (): string {
  return this.toString();
};

async function startServer() {
  try {
    await connectToDB();
    await initializeRoute();
    server.listen(PORT, () => {
      logger.info(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
