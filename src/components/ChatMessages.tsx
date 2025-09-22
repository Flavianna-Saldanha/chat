import { useChat } from "../app/contexts/ChatContext";
import { useUser } from "../app/contexts/UserContext";

export const ChatMessages = () => {
    const chatCtx = useChat();
    const userCtx = useUser();

    return (
        <div className="flex flex-col gap-1">
            {chatCtx?.chat.map( item => (
                <div
                    key={item.id}
                    className={`border border-white/20 rounded-md p-2 text-sm
                        ${item.user === userCtx?.user ? 
                            'self-end bg-violet-700 text-right' : 
                            'self-start bg-white text-black text-left'
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