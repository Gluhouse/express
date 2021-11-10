import express from 'express';
import blogsRoutes from './src/routes/blogs.js';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(blogsRoutes);

app.get('/', (req, res) => {
  console.log(req.query);
  res.status(200).json('Working');
});

app.listen(PORT, () => {
  console.log('Started server...');
});
