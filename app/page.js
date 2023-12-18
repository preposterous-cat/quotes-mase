import Chat from "@/components/chat";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:px-12 p-2">
      <Header />
      <Chat />
    </main>
  );
}
