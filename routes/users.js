var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUserList);


//route get/post form thêm mới user
router.get('/add', userController.getUserCreate);
router.post('/add', userController.postUserCreate);

//route get xem chi tiết user
router.get('/detail/:id', userController.getUserDetail);

//route get/post cập nhật  user
router.get('/update/:id', userController.getUserUpdate);
router.post('/update/:id', userController.postUserUpdate);

//route get/post xóa  user
router.get('/delete/:id', userController.getUserDelete);
router.post('/delete/:id', userController.postUserDelete);

module.exports = router;