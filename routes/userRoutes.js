const express = require('express')
const router = express.Router();

//UUID package for creating unique user ID's
const { v4: uuidv4 } = require('uuid');

//Array container acting as database for user input
let users=[];

router.route('/').get((req,res)=>{
    res.send(users)
}).post((req,res)=>{
    let user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    })

    res.send(`User ${user.firstName} has been posted!`)
})

router.route('/:id').get((req,res)=>{
    const { id } = req.params;
    let user = users.find(u=>u.id===id)
    res.send(`User ${user.firstName} with ${id} is found`)
}).delete((req,res)=>{
    const {id} = req.params;
    users = users.filter(u=>u.id!==id)
    res.send(`User deleted`)
}).patch((req,res)=>{
    const {id} = req.params
    const{firstName, lastName, age} = req.body;

    let user = users.find(u=>u.id===id)

    if(firstName){
        user.firstName = firstName
    }
    if(lastName){
        user.lastName = lastName
    }
    if(age){
        user.age = age
    }

    res.send(`User patched`)
})


module.exports = router;