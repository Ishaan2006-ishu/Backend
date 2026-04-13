

const express = require("express");

const {
    getPostsList,
    addNewPost,
    sendPostById,
    updatePost,
    patchPost,
    deletePost
} = require("../controllers/postController.js");

const router = express.Router();


router.get("/", getPostsList);


router.post("/", addNewPost);


router.get("/:id", sendPostById);


router.put("/:id", updatePost);


router.patch("/:id", patchPost);


router.delete("/:id", deletePost);

module.exports = router;