const getPostsList = (req, res) => {
    res.send("blog list");
};

const addNewPost = (req, res) => {
    res.send("blog post");
};

const sendPostById = (req, res) => {
    res.send("inside blog");
};

module.exports = { getPostsList, addNewPost, sendPostById };