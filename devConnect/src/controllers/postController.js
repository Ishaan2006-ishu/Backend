

const getPostsList = (req, res) => {
    
    res.send("ye le sari post");
};

const addNewPost = (req, res) => {
    console.log("Body:", req.body);
    console.log("Query:", req.query);

    res.send("kardi post");
};

const sendPostById = (req, res) => {
    console.log("id:", req.params.id);
    

    res.send("ye le particular id ki post");
};

const updatePost = (req, res) => {
    console.log("id:", req.params.id);
   

    res.send("kardiya update");
};

const patchPost = (req, res) => {
    console.log("id:", req.params.id);
    

    res.send("partially update kardi");
};

const deletePost = (req, res) => {
    console.log("id:", req.params.id);
    

    res.send("deleted");
};

module.exports = {
    getPostsList,
    addNewPost,
    sendPostById,
    updatePost,
    patchPost,
    deletePost
};