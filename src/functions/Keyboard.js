import React, { useEffect } from 'react';
import { useKeyboard } from "react-native-keyboard-height";
function KeyboardH() {
    const [keyboardHeigth] = useKeyboard();
    useEffect(() => {
        
    }, [keyboardHeigth]);
    return keyboardHeigth;
}
export default KeyboardH;