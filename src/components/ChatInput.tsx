import { KeyboardEvent, useState } from "react";
import { useChat } from "../app/contexts/ChatContext";
import { useTheme } from "../app/contexts/ThemeContext";

type Props = {
    name: string;
}

export const ChatInput = ({name}: Props) => {
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
        }
    }

    const themeCtx = useTheme();

    return(
        <input 
            className={`w-full bg-transparent text-md outline-none
                    ${themeCtx?.theme === 'light' ?
                        'text-black placeholder:text-black' :
                        'text-white placeholder:text-white'
                    }
                `}
            placeholder={`${name}, digite uma mensagem (e aperte enter)`}
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    );
}