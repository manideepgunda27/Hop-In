const express = require('express');
const router = express.Router();
const userController=require('../controllers/userController')
const { validateUser } = require('../middlewares/validateUser');
const { authenticate } = require('../middlewares/auth');
router.post('/register',userController.registerUser);
router.post('/login',userController.login);

module.exports=router;
