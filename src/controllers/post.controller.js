const savePost = (_req, res) => {

  res.send({
    message: "post saved!"
  });

};

const getPost = (_req, res) => {

  res.send({
    message: "post obtained!"
  });
};

const updatePost = (_req, res) => {

  res.send({
    message: "post updated!"
  });
};

const deletePost = (_req, res) => {

  res.send({
    message: "post deleted!"
  });
};

module.exports = {
  savePost,
  getPost,
  updatePost,
  deletePost
};
