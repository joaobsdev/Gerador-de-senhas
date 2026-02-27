import {useState, useEffect} from "react";

import "./styles.css";
import PasswordBox from "../PasswordBox";
import CopyPasswordButton from "../CopyPasswordButton";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [digitsLength, setDigitsLength] = useState(2);
    const [symbolsLength, setSymbolsLength] = useState(2);

    useEffect(() => {
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";
        const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        
        let generatedPassword = "";
        
        const totalSpecialChars = Math.min(digitsLength + symbolsLength, passwordLength);
        const lettersLength = Math.max(0, passwordLength - totalSpecialChars);
        
        for (let i = 0; i < lettersLength; i++) {
            generatedPassword += letters[Math.floor(Math.random() * letters.length)];
        }
        
        const actualDigitsLength = Math.min(digitsLength, passwordLength - generatedPassword.length);
        for (let i = 0; i < actualDigitsLength; i++) {
            generatedPassword += digits[Math.floor(Math.random() * digits.length)];
        }
    
        const actualSymbolsLength = Math.min(symbolsLength, passwordLength - generatedPassword.length);
        for (let i = 0; i < actualSymbolsLength; i++) {
            generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];
        }
        
        generatedPassword = generatedPassword.split('').sort(() => Math.random() - 0.5).join('');
        
        const timeoutId = setTimeout(() => {
            setPassword(generatedPassword);
        }, 0);
        
        return () => clearTimeout(timeoutId);
    }, [passwordLength, digitsLength, symbolsLength]);

return (
    <>
    <div className="slider">
        <label htmlFor="Tamanho">Tamanho</label>
        <input 
        id="password-length" 
        type="range" 
        min={0} 
        max={10} 
        value={passwordLength} 
        onChange={ ({target}) => setPasswordLength(parseInt(target.value))}
        />
        <span>{passwordLength}</span>
    </div>

    <div className="slider">
    <label htmlFor="digits-length">Dígitos</label>

  <input
    className="slider"
    id="digits-length"
    type="range"
    min={0}
    max={10}
    value={digitsLength}
    onChange={({ target }) =>
      setDigitsLength(parseInt(target.value))
    }
  />

  <span>{digitsLength}</span>
</div>

    <div className="slider">
        <label htmlFor="Tamanho">Símbolos</label>

        <input 
        id="symbols-length" 
        type="range" 
        min={0} 
        max={10} 
        value={symbolsLength} 
        onChange={ ({target}) => setSymbolsLength(parseInt(target.value))}
        />

        <span>{symbolsLength}</span>
    </div>

    <PasswordBox password={password} />
    <CopyPasswordButton password={password} />
    </>
);
} 

export default PasswordGenerator;