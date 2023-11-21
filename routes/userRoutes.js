const express = require('express')
const router = express.Router();

//Array container acting as database for user input
let users=[];

router.route('/').get((req,res)=>{
    res.send(users)
}).post((req,res)=>{
    users.push(req.body);
    res.send(`User ${req.body.firstName} has been posted!`)
})

module.exports = router;