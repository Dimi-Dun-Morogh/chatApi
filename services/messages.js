const Message = require('../models/Message');

async function getChatMessages(chatId) {
  try {
    const messages = await Message.find( { chat: chatId})
    .populate('user',['firstName','lastName']) // тянем объекты юзера и чата по ID, они будут добавлены в объект-схему Месседж
  //  .populate('chat') // изначально там только поле с id
    return messages;
  } catch (err){
    return Promise.reject(err);
  }
}

async function newMessage({  chat, user, text}) {
  try {
    const newMessage  =  {
      chat,
      user,
      text,
      time: Date.now()
    }
    const messages = await Message.create(newMessage)
    return messages;
  } catch (err){
    return Promise.reject(err);
  }
}

module.exports = {
  newMessage,
  getChatMessages
}