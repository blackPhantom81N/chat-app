import React, { useEffect, useRef } from "react";
import MessageContainer from "./MessageContainer";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeltons/MessageSkelton";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessage = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessage?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages?.length > 0 &&
        messages?.map((message) => (
          <div key={message?._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages?.length === 0 && (
        <p className="text-center mt-5">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
