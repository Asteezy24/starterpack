import Router from 'express';
import { doSomething } from '../functions/db';

const router = Router();

router.get('/', async (req, res) => {
  const data = await doSomething();
  res.json({ error: false, data });
});

export default router;
