require('dotenv').config();

const express = require('express');
const blogsRoutes = require('./routes/blogs.js');

const PORT = 5001;

const app = express();

const db = require('./models');

db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/blogs', blogsRoutes);

app.get('/', (req, res) => {
  console.log(req.query);
  res.status(200).json('Working');
});

app.listen(PORT, () => {
  console.log('Started server...');
});
