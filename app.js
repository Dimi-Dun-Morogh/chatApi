const express = require("express");
const mongoose = require ('mongoose');
const { url } = require ('./config/database');
const cors = require('cors');
const app = express();
const http = require('http');
const io = require('socket.io')(http);

// Routes
const  UserController = require('./routes/user');
const ChatsController = require('./routes/chats');
const MessagesController = require( './routes/messages');


// Services
const chatService = require ('./services/chats');
const SocketListeners = require('./sockets/listeners');
const SocketEmiters = require ('./sockets/emiters');


const ROUTES = {
  users: "/api/users",
  chats: "/api/chats",
  messages: "/api/messages"
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
app.use(ROUTES.messages, MessagesController)


io.on('connection',(socket)=>{
  // join chat
  socket.on(SocketListeners.JOIN_CHAT,()=>{
    console.log(SocketListeners.JOIN_CHAT)
    // emit
  })
  // select chat
  socket.on(SocketListeners.SELECT_CHAT,()=>{
    console.log(SocketListeners.SELECT_CHAT)
  });
  // user typing
  socket.on(SocketListeners.USER_TYPING,()=>{
    console.log(SocketListeners.USER_TYPING)
    // emit
  })

  // new message
  socket.on(SocketListeners.NEW_MESSAGE,()=>{
    console.log(SocketListeners.NEW_MESSAGE)
    //emit
  })
})



app.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNIN PORT: ${PORT}`)
});




