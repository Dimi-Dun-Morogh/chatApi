const express = require("express");
const mongoose = require ('mongoose');
const { url } = require ('./config/database');
const cors = require('cors');
const app = express();

// Routes
const  UserController = require('./routes/user');
const ChatsController = require('./routes/chats');


// Services
const chatService = require ('./services/chats');

const ROUTES = {
  users: "/api/users",
  chats: "/api/chats",
}

const PORT = 3000;

// Init App

async function initApp() {
  try {
    const globalChat =  await chatService.isGlobalChatExist();
    if(globalChat) return  Promise.resolve();
    // создаем чат
    await chatService.createChat({ name: chatService.GLOBAL_CHAT_NAME});

  } catch (err) {
    return Promise.reject(err);
  }
}

// Connect to DB
mongoose.connect(url, {
  useNewUrlParser:true,
  useUnifiedTopology: true
})
.then(()=> console.log('Mongo connectedd success'))
.then(initApp)
.then(console.log('App init success'))
.catch(err=> console.log(err))

app.use(cors());

app.use(express.json()); //парс всех реквестов, спарсеный  джейсон добавляется в req.body
// Routes use
app.use(ROUTES.chats, ChatsController);
app.use(ROUTES.users, UserController);


app.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNIN PORT: ${PORT}`)
});




