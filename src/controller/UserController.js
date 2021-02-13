const UserModel = require('../models/user.model');

//getUsers list
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