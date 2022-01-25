const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');
router.get('/blogpost',postController.blogpost);
router.get('/search',postController.search);


module.exports = router;