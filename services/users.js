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


module.exports = {
  createUser,
  getUser,
  getUserByEmail,
  updateUserData
}