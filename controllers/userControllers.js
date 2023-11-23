const { v4: uuidv4 } = require('uuid');

//Storage array for user data and for manipulation
let users = [];

const getUser = (req,res)=>{
    res.send(users);
}

const postUser = (req,res)=>{
    let user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    })
    res.send(`User ${user.firstName} has been posted!`);
}

const getUserId = (req,res)=>{
    const { id } = req.params;
    let user = users.find(u=>u.id===id);
    res.send(`User ${user.firstName} with ${id} is found`);
}

const deleteUserId = (req,res)=>{
    const {id} = req.params;
    users = users.filter(u=>u.id!==id);
    res.send(`User deleted`);
}

const patchUserId = (req,res)=>{
    const {id} = req.params;
    const{firstName, lastName, age} = req.body;

    let user = users.find(u=>u.id===id)

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }

    res.send(`User patched`);
}

module.exports = {
    getUser,
    postUser,
    getUserId,
    deleteUserId,
    patchUserId
}