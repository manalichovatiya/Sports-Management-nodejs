const { Category } = require("../models");

// category
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

// Get category list
const getCategoryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Category.find();
};

// Get Category details by id
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

// update Category
const updateDetails = async (categoryId, reqBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: reqBody });
};

// Delete user
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryById,
    updateDetails,
    deleteCategory
}