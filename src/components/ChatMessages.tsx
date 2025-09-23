import { useChat } from "../app/contexts/ChatContext";
import { useTheme } from "../app/contexts/ThemeContext";
import { useUser } from "../app/contexts/UserContext";

export const ChatMessages = () => {
    const chatCtx = useChat();
    const userCtx = useUser();
    const themeCtx = useTheme();

    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map( item => (
                <div
                    key={item.id}
                    className={`border border-white/20 rounded-md p-2 text-sm
                        ${item.user === userCtx?.user ? 
                            'self-end bg-violet-700 text-right' :
                            `self-start text-left 
                                ${themeCtx?.theme === 'light' ?
                                    'bg-black/30 text-black' :
                                    'bg-white text-black'
                                }`
                        }
                    `}

                >
                    <div className="font-bold">{item.user}</div>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}