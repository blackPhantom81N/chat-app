import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isMessageSelf = message?.senderId === authUser?._id;
  const chatClassName = isMessageSelf ? "chat-end" : "chat-start";
  const profilePic = isMessageSelf
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = isMessageSelf ? "bg-blue-500" : "";
  const shakeClass = message?.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Chat bubble component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-1 `}
      >
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message?.createdAt)}
      </div>
    </div>
  );
};

export default Message;
