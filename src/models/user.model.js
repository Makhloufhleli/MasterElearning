var dbConn = require('../../config/dbConfig');

var User = (user)=>{
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

module.exports = User;