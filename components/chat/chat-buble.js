const ChatBubble = ({ isSender, message }) => {
  return (
    <div
      className={`chat ${
        isSender ? "chat-end self-end " : "chat-start "
      } lg:w-6/12`}
    >
      <div
        className={`chat-bubble text-2xl text-black ${
          isSender ? "bg-red-200" : "bg-slate-200"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
