const UserModel = require('../models/user.model');

//get All Users list
exports.getUsresList = (request, response)=>{
    //console.log('getting Usres list');
    UserModel.getAllUsers((error, users)=>{
        console.log('here we are!')
        if(error){
            response.send(error);
        }
        console.log('Users', users)
        response.send(users);
    })
}

//get User by id
exports.getUserById = (request, response)=>{
    //console.log('geting user by id');
    UserModel.getUserById(request.params.id, (error, user)=>{
        if(error){
            response.send(error);
        }
        console.log('User', user)
        response.send(user);
    })
}