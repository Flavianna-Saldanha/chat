"use client"

import { Container } from "../components/Container";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { ChatProvider } from "./contexts/ChatContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { Chat } from "@/src/components/Chat";

export const Page = () => {
  return (
    <ThemeProvider>
      <Container>
        <div className="container mx-auto max-w-lg px-2">
          <ThemeSwitch />
          <UserProvider>
            <ChatProvider>
              <h1 className="text-3xl pt-20 text-center">Chat simples</h1>

              <Chat />
            </ChatProvider>
          </UserProvider>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Page;