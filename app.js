const express = require("express");
const mongoose = require ('mongoose');
const { url } = require ('./config/database');
const app = express();
const  UserController = require('./routes/user');



const ROUTES = {
  users: "/api/users"
}

const PORT = 3000;

// Connect to DB
mongoose.connect(url, {
  useNewUrlParser:true,
  useUnifiedTopology: true
})
.then(()=> console.log('Mongo connectedd success'))
.catch(err=> console.log(err))

app.use(express.json()); //парс всех реквестов, спарсеный  джейсон добавляется в req.body
// Routes
app.use(ROUTES.users, UserController);

app.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNIN PORT: ${PORT}`)
});




