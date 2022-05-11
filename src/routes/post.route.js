const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.route('/save').post(postController.savePost);
router.route('/get').get(postController.getPost);
router.route('/update').patch(postController.updatePost);
router.route('/delete').delete(postController.deletePost);

module.exports = router;
