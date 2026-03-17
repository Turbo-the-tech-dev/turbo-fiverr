import { Router } from 'express';
import { apiVersion } from '../lib/config.js';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    version: apiVersion,
    timestamp: new Date().toISOString()
  });
});

export { router as statusRouter };
