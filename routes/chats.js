const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const chatsService = require("../services/chats");

router.get("/", authMiddleware, async (req, res) => {
  res.status(200).send(`email: ${req.locals.email}`);
});


router.get("/public", authMiddleware, async(req,res)=>{
  try {
    const chats = await chatsService.getPublicChats();
    res.status(200).send(chats);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.get('/:id',authMiddleware, async(req,res)=>{
  try {
    const {id} = req.params;
    const chat = await chatsService.getChat(id);
    res.status(200).send(chat);
  } catch (err) {
    res.status(500).send(err);
  }
})


module.exports = router;