const { request } = require('express');
const UserModel = require('../models/user.model');

//get All Users list
exports.getUsresList = (request, response)=>{
    //console.log('getting Usres list');
    UserModel.getAllUsers((error, users)=>{
        if(error){
            response.send(error);
        }
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
        response.send(user);
    })
}

//create new user
exports.createUser = (request, response)=>{
    
    const userRequestData = new UserModel(request.body);
    console.log('User request data', userRequestData);
    if(request.body.contructor === Object && Object.keys(request.body).length === 0){
        response.send(400).send({success: false, message:'please fill al fields'});
    }else{
        console.log('valid data');
        UserModel.createUSer(userRequestData, (error, user)=>{
            if(error){
                response.send(error);
                response.json({status: false, message: 'Error!, something went wrong!'});
            }else{
                response.json({status: true, message: 'User sucessfully created', user});
            }
        })
    }
    
}

