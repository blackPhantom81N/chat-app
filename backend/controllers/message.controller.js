import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req?.body;
    const { id: recieverId } = req?.params;
    const senderId = req?.user?._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //Save changes to database
    //This will run in parellel
    await Promise.all([conversation.save(), newMessage.save()]);

    return res.status(201).json(newMessage);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: "Internal Server Error" });
  }
};
