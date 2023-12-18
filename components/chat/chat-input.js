import { FaPaperPlane } from "react-icons/fa6";

const ChatInput = ({ messageSubmitHandler, messageHandler, senderChat }) => {
  return (
    <>
      <form onSubmit={messageSubmitHandler}>
        <div className="my-5 min-w-full flex gap-1">
          {/* <input
        type="text"
        placeholder="Type here"
        className="input input-bordered rounded-xl border-4 border-solid border-black w-11/12 text-2xl overflow-y-auto max-h-20"
      /> */}
          <textarea
            rows={2}
            className="textarea textarea-accent textarea-bordered textarea-xs rounded-xl border-4 border-solid border-black lg:w-11/12 w-10/12 text-2xl"
            placeholder="Ketik di sini..."
            name="message"
            onChange={messageHandler}
            value={senderChat}
          ></textarea>
          <button className="btn btn-success lg:w-1/12 w-2/12 btn-lg self-center text-4xl">
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatInput;
