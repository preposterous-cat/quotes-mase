"use client";
import ChatBubble from "./chat-buble";
import { motion } from "framer-motion";
import ChatInput from "./chat-input";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { translate } from "google-translate-api-x";

const Chat = () => {
  const [senderChat, setSenderChat] = useState("");
  const [chatData, setChatData] = useState([
    {
      isSender: false,
      message: `Welcome Ngap! ketik "Kata-kata hari ini mase" kalau kamu mau semangad.`,
    },
  ]);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("http://localhost:3000/api", fetcher, {
    refreshInterval: 500,
  });

  const messageHandler = (e) => {
    setSenderChat(e.target.value);
  };

  const messageSubmitHandler = async (e) => {
    e.preventDefault();
    // Menambahkan pesan pengirim baru
    setChatData((prev) => [...prev, { isSender: true, message: senderChat }]);

    // Delay for a few seconds
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Set the delay time in milliseconds (2000 ms = 2 seconds)

    //Checking if senderChat is not "kata-kata hari ini mase"
    if (senderChat.toLowerCase().trim() == "kata-kata hari ini mase") {
      // Menambahkan pesan dari data (asumsikan data[0].content tidak undefined)
      // const translated = await translate(trn, { to: "id" });
      // console.log(data);
      setChatData((prev) => [
        ...prev,
        { isSender: false, message: data.res_translate.text },
      ]);
    } else {
      setChatData((prev) => [
        ...prev,
        { isSender: false, message: "Gak ngerti Ngap" },
      ]);
    }

    setSenderChat("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }} // Posisi awal di luar layar sebelah kiri
      animate={{ opacity: 1, x: 0 }} // Posisi akhir di posisi awal (x: 0)
      transition={{ duration: 1 }}
      className="min-w-full"
    >
      <div className="card bg-base-100  border-black border-solid border-4">
        <div className="card-body overflow-y-auto h-96">
          {chatData.map((value, key) => (
            <ChatBubble
              key={key}
              isSender={value.isSender}
              message={value.message}
            />
          ))}
        </div>
      </div>
      <ChatInput
        messageSubmitHandler={messageSubmitHandler}
        messageHandler={messageHandler}
        senderChat={senderChat}
      />
    </motion.div>
  );
};

export default Chat;