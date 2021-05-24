var dbConn = require('../../config/dbConfig');

var User = function(user){
    this.prenom = user.prenom;
    this.nom = user.nom;
    this.tel = user.tel;
    this.email = user.email;
    this.login = user.login;
    this.password = user.password;
}

//get all users
User.getAllUsers = (result)=>{
    dbConn.query('SELECT * FROM utilisateur', (error, response)=>{
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
    dbConn.query('SELECT * FROM utilisateur WHERE id = ?', id, (error, response)=>{
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
    dbConn.query('INSERT INTO utilisateur SET ?', userRequestData, (error, response)=>{
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
    dbConn.query("UPDATE utilisateur SET first_name = ?,last_name = ?, email = ?, avatar = ?, login = ?, password = ?, status = ?, created_at = ?, phone = ? WHERE id=?", [userRequestData.first_name, userRequestData.last_name, userRequestData.email, userRequestData.avatar, userRequestData.login, userRequestData.password, userRequestData.status, userRequestData.created_at, userRequestData.phone, id], (error, response)=>{
        if(error){
            console.log('error while updating user');
            result(null, error);
        }else{
            console.log('user successfully updated!');
            result(null, response);
        }
    })
}

//delete user
User.deleteUser = (id, result)=>{
    dbConn.query('DELETE from utilisateur WHERE id= ?', [id], (error, response)=>{
        if(error){
            console.log('Error while deleting user');
            result(null, error);
        }else{
            result(null, response);
        }
    })
}

module.exports = User;
