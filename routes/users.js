const express = require("express");
const router = express.Router();
const userService = require('../services/users')



//GET /users
router.get('/',(req,res)=>{
  console.log(req.query.name);
  const users = userService.getUsers()
  let name = req.query.name;
  let user = users.filter(user=>user.name ===name)
  if (name && user) return res.status(200).send(user);
res.status(200).send(users)
});

// /users/id
router.get('/:id', (req,res)=> {
  console.log(req.params.id)
  const id = req.params.id;
  const user = userService.getUser(id);
  if(!user) return res.status(404).send({message:"User not found"})
  res.status(200).send(user);
})

//POST /users
router.post('/',(req,res)=>{
  console.log(req.body);
// if ...
  const newUser = userService.addNewUser(req.body);
  res.status(200).send(newUser);
})

module.exports = router;