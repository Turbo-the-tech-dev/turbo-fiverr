import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { port } from './lib/config.js';
import { requestLogger } from './middlewares/requestLogger.js';
import { statusRouter } from './routes/status.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/status', statusRouter);

app.get('/', (_req, res) => {
  res.send('API server is running.');
});

const server = app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

export function closeServer() {
  server.close();
}
