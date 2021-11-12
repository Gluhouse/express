const blogsService = require('../services/blogs.service');

const createBlog = async (req, res) => {
  const { author, title, content } = req.body;

  const blog = {
    date: new Date(),
    author,
    title,
    content,
  };

  const result = await blogsService.createBlog(blog);

  res.status(201).json(result);
};

const getAllBlogs = async (req, res) => {
  const result = await blogsService.getAllBlogs();

  res.status(200).json(result);
};

const getBlogById = async (req, res) => {
  const id = req.params.id;

  const result = await blogsService.getBlogById(id);

  res.status(200).json(result);
};

const updateBlogById = async (req, res) => {
  const { author, title, content } = req.body;
  const id = req.params.id;

  const newBlog = {
    author: author,
    title: title,
    content: content,
  };

  const result = await blogsService.updateBlogById(newBlog, id);

  const updatedBlog = await blogsService.getBlogById(id);

  res.status(200).json(updatedBlog);
};

const deleteBlogById = async (req, res) => {
  const id = req.params.id;

  const result = await blogsService.deleteBlogById(id);

  console.log(result);

  if (result === 1) {
    res.send({
      message: 'Blog was deleted successfully!',
    });
  } else {
    res.send({
      message: `Cannot delete blog with id=${id}. Maybe blog was not found!`,
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
