/*
    SCHEMA be like:
    structure:
    {
        id: [Primary key] Number (Auto increase),
        username: String,
        email: String
    }

    //Example instance:
    user = [
        {
            id: 1,
            username: nguyenvana,
            email: nguyenvana@gmail.com,
        },
         {
            id: 1,
            username: nguyenvanbbbb,
            email: nguyenvanbbbb@gmail.com,
        },
        ...
    ]

*/

// Khởi tạo mảng user
var user = [];
// Tạo biến đếm ids - hỗ trợ việc auto increase primary key (id)
var ids = 1;

// thêm mới
function userAdd(username, email) {
    id = ids;
    user[id] = {id: ids, username: username, email: email};
    ids ++;
}

// cập nhật: Chức năng này chỉ là demo đơn giản trên mảng, chưa có kiểm tra hợp lệ gì nhé.
function userUpdate(id, username, email) {
    user[id] = {id: id, username: username, email: email}
}

// xóa
function userDelete(id) {
    delete user[id];
}



// lấy chi tiết
function userGetDetail(id) {
    return user[id];
}

function userGetAll(){
    return user;
}

module.exports = {
    userAdd,
    userUpdate,
    userDelete,
    userGetDetail,
    userGetAll
}