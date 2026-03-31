const express = require("express");

const { getPostsList, addNewPost, sendPostById } = require("../controllers/postController.js");

const router = express.Router();

router.get("/", getPostsList);
router.post("/", addNewPost);
router.post("/:id", sendPostById); 

module.exports = router;