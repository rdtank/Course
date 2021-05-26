const express = require("express");
const { Category } = require("../models/category");
const router = express.Router();

//get category
router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(categoryList);
});

//get category by id
router.get(`/:id`, async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(500).json({ message: "Category with given id not found!" });
  }
  res.status(200).send(category);
});

//create new category
router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    color: req.body.color,
    icon: req.body.icon,
  });
  category = await category.save();
  if (!category) {
    return res.status(400).send("Category not created!");
  }
  res.send(category);
});

//update category
router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
    },
    { new: true }
  );

  if (!category) {
    return res.status(400).send("Category not updated!");
  }
  res.send(category);
});

//delete category by id
router.delete("/:id", (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "Category Removed!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Category not found!" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});
module.exports = router;
