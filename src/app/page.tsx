"use client"

import { ChatProvider } from "./contexts/ChatContext";
import { UserProvider } from "./contexts/UserContext";
import { Chat } from "@/src/components/Chat";

export const Page = () => {
  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl my-3 text-center">Chat simples</h1>

          <Chat />
        </ChatProvider>
      </UserProvider>
    </div>
  );
}

export default Page;