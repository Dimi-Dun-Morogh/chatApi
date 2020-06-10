const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const messagesService = require('../services/messages');

/**
 * @router /api/messages/chat/:id
 */

router.get('/chat/:id',authMiddleware, async(req,res)=>{
  try {
    const { id } = req.params;
    const messages = await messagesService.getChatMessages(id);
    res.status(228).send(messages);
  } catch (err) {
    res.status(500).send(err)
  }
})


module.exports = router;