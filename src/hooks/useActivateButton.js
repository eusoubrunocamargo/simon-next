import { useRef, useState, useCallback } from "react";
import useSound from "./useSound";
import { colorData } from "../components/ColorData/colorData";

export const useActivateButton = () => {

    const mainRef = useRef(null);
    
    const [activeButton, setActiveButton] = useState(null);

    const soundFunctionsRef = useRef({
        green: useSound(colorData.green.sound),
        blue: useSound(colorData.blue.sound),
        red: useSound(colorData.red.sound),
        yellow: useSound(colorData.yellow.sound)
    });

    const activateButton = useCallback(async (color) => {
        if(mainRef.current){
            mainRef.current.style.pointerEvents = 'none';
            setActiveButton(color);

            const timeout = 300;
            const timeoutPromise = new Promise((resolve) => setTimeout(resolve,timeout));
            await Promise.race([soundFunctionsRef.current[color](), timeoutPromise]);
            
            mainRef.current.style.pointerEvents = 'auto';
            setActiveButton(null);
        }
    }, []);

    return { mainRef , activateButton , activeButton};
};