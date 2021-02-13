var dbConn = require('../../config/dbConfig');

var User = function(user){
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.login = user.login;
    this.password = user.password;
    this.status = user.status ? user.status : 1;
    this.created_at = new Date();
    this.phone = user.phone;

}

//get all users
User.getAllUsers = (result)=>{
    dbConn.query('SELECT * FROM user', (error, response)=>{
        if(error){
            console.log('error while fetching users', error);
            result(null, error);
        }else{
            console.log('users successfully fetched!')
            result(null, response);
        }

    })
}

//get user by id
User.getUserById = (id, result)=>{
    dbConn.query('SELECT * FROM user WHERE id = ?', id, (error, response)=>{
        if(error){
            console.log('error while fetching user', error);
            result(null, error);
        }else{
            console.log('user successfully fetched!')
            result(null, response);
        }
    })
}

//create new user
User.createUSer = (userRequestData, result)=>{
    dbConn.query('INSERT INTO user SET ?', userRequestData, (error, response)=>{
        if(error){
            console.log('error while insert data');
            result(null, error);
        }else{
            console.log('user successfully created!');
            result(null, response);
        }
    })
}

//update user
User.updateUSer = (id, userRequestData, result)=>{
    dbConn.query("UPDATE user SET first_name = ?,last_name = ?, email = ?, avatar = ?, login = ?, password = ?, status = ?, created_at = ?, phone = ? WHERE id=?", [userRequestData.first_name, userRequestData.last_name, userRequestData.email, userRequestData.avatar, userRequestData.login, userRequestData.password, userRequestData.status, userRequestData.created_at, userRequestData.phone, id], (error, response)=>{
        if(error){
            console.log('error while updating user');
            result(null, error);
        }else{
            console.log('user successfully updated!');
            result(null, response);
        }
    })
}

module.exports = User;