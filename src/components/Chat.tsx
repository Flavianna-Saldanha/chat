import { useTheme } from "../app/contexts/ThemeContext";
import { useUser } from "../app/contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { NameInput } from "./NameInput";

export const Chat = () => {
    const userCtx = useUser();

    if(!userCtx) return null;
    if(!userCtx.user) return <NameInput />

    const themeCtx = useTheme();

    return (
        <div className={`border rounded-md mt-5
                ${themeCtx?.theme === 'light' ?
                        'border-gray-800 text-black' :
                        'border-white/30 text-white'
                }
            `}>
            <div className="h-96 p-3 overflow-y-scroll">
                <ChatMessages />
            </div>
            <div className={`border-t  p-3
                    ${themeCtx?.theme === 'light' ?
                        'border-t-black/40' :
                        'border-t-white/30'
                }
                `}>
                <ChatInput name={userCtx.user} />
            </div>
            <div className={`border-t  p-3
                    ${themeCtx?.theme === 'light' ?
                        'border-t-black/40' :
                        'border-t-white/30'
                }
                `}>
                <ChatInput name={'user'} />
            </div>
        </div>
    );
}