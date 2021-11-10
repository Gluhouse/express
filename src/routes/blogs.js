import { Router } from 'express';
import { getAll } from '../controllers/blogs.js';

const router = Router();

router.get('/blogs', getAll);

export default router;
