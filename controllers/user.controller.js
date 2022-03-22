const User = require('../models/user.model');

exports.getUserList = (req,res,next) =>{

    res.render('./user/list', {title:"Danh sách tài khoản",result: User.userGetAll()});

}


/*Get và post tạo user mới*/
exports.getUserCreate = (req, res, next) => {
    res.render('./user/add');
}

exports.postUserCreate = (req, res, next) => {
    //Lấy tất cả dữ liệu được gửi từ form (method POST)
    const data = req.body;
    //insert vào db
    User.userAdd(data.username, data.email);
    res.redirect('/users');
}

// xem chi tiết user
exports.getUserDetail = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //truy vấn db để dữ liệu user theo id
    const data = User.userGetDetail(ID);
    res.render('./user/detail', {data: data});
}

/*Get và post cập nhật user*/
exports.getUserUpdate = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //truy vấn db để dữ liệu user theo id
    const data = User.userGetDetail(ID);
    res.render('./user/update', {data: data});
}

exports.postUserUpdate = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = Number(req.params.id); // chuyen ve kieu so
    //Lấy tất cả dữ liệu được gửi từ form (method POST)
    const data = req.body;

    //update lại db dữ liệu đã nhận theo id user
    User.userUpdate(ID, data.username, data.email);
    res.redirect('/users');
}

/*Get và post xóa user*/
exports.getUserDelete = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    ////truy vấn db để dữ liệu user theo id
    const data = User.userGetDetail(ID);
    res.render('./user/delete', {data: data});
}

exports.postUserDelete = (req, res, next) => {
    //lấy id từ params (method GET)
    const ID = req.params.id;
    //delete user khỏi db theo id user
    User.userDelete(ID);
    res.redirect('/users');
}