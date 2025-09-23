import { KeyboardEvent, useState } from "react";
import { useUser } from "../app/contexts/UserContext";
import { useTheme } from "../app/contexts/ThemeContext";

export const NameInput = () => {
    const userCtx = useUser();
    const [nameInput, setNameInput] = useState('');
    
    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLocaleLowerCase () === 'enter') {
            if(nameInput.trim() !== '' && nameInput !== 'user') {
                userCtx?.setUser(nameInput.trim());
            }
        }
    }

    const themeCtx = useTheme();

    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input 
                    type="text" 
                    className={`flex-1 border rounded-md
                    px-4 py-3 outline-none
                        ${themeCtx?.theme === 'light' ? 
                            'border-gray-800 text-black' :
                            'border-white/30 bg-white/10 text-white' 
                        }
                    `}
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
            </div>
        </div>
    );
}