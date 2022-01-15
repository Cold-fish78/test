const express = require('express');
const router = express.Router();
console.log("user router loaded");
const userController = require('../controllers/user_controller');
router.get('/signIn',userController.signIn);










module.exports = router;