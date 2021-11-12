const { Blogs } = require('../models');

const createBlog = async (blog) => {
  const result = await Blogs.create(blog);

  return result;
};

const getAllBlogs = async () => {
  const result = await Blogs.findAll();

  return result;
};

const getBlogById = async (id) => {
  const result = await Blogs.findOne({
    where: {
      id,
    },
  });

  return result;
};

const updateBlogById = async (newBlog, id) => {
  const result = await Blogs.update(newBlog, { where: { id } });

  return result;
};

const deleteBlogById = async (id) => {
  const result = await Blogs.destroy({ where: { id } });

  return result;
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
