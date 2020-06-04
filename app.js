const express = require("express");
const app = express();

const users = require('./routes/users');

const ROUTES = {
  users: "/users"
}

const PORT = 3000;

app.use(express.json()); //парс всех реквестов, спарсеный  джейсон добавляется в req.body
// Routes
app.use(ROUTES.users,  users);


app.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNIN PORT: ${PORT}`)
});




// const mid = (req,res,next) => {
// console.log("Mid");
// if(false) return res.status(401).send("Mid")
// next();
// }

// app.get("/",  (req, res) => {
//   console.log("request");
//   res.send("hello world");
// });

// // принимает пост запрос по роуту /юзерс, отправляет статус 200 и ответ
// app.post("/users", (req,res)=>{
// console.log(req.body);

// res.status(200).send({info:"some info from server"} )
// })

