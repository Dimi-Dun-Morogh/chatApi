const User = require ('../models/User');

async function createUser(data) {
  try {
    const user = await User.updateOne(
      {email: data.email},
       data,
       {upsert:true});
    return user;
  } catch (err) {
    return Promise.reject(err)
  }
}

async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    return Promise.reject(err)
  }
}

async function getUserByEmail(email) {
  try {
    console.log(email)
    //const query = User.findOne({'email':email})
    const user = User.findOne({'email':email})
    return user
  } catch (err) {
    return Promise.reject(err)
  }
}

async function updateUserData(data) {
  try {
    const user = await User.updateOne(
      {email: data.email},
       data,
       {upsert:true});
    return user;
  } catch (err) {
    return Promise.reject(err)
  }
}

async function userJoinChat(chatId,userId) {
  try {
    /**
     * 1й аргумент - параметр по которому ищем нашего юзера, chats:$nin chatId - проверка что в массиве чатс нет такого айди
     * 2й аргумент - пушим в поле чат новый айди
     */
   await User.updateOne({
      _id:  userId,
      chats: { $nin: chatId}
    },{
      $push:{ chats: chatId}
    })
    return true;
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = {
  createUser,
  getUser,
  getUserByEmail,
  updateUserData,
  userJoinChat
}