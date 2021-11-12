const { Router } = require('express');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require('../controllers/blogs');

const router = Router();

router.post('/', createBlog);

router.get('/', getAllBlogs);

router.get('/:id', getBlogById);

router.put('/:id', updateBlogById);

router.delete('/:id', deleteBlogById);

module.exports = router;
