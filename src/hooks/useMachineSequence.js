import {  useEffect , useContext } from "react";
import { SequenceContext } from "../contexts/SequenceContext";
import { getRandomColor } from "../components/ColorData/colorData";

export const useMachineSequence = (activateButton, mainRef) => {

    const { machineSequence , setMachineSequence } = useContext(SequenceContext);

    const generateSequence = () => {
        return new Promise((resolve) => {
            const randomColor = getRandomColor();
            setMachineSequence((prev) => [...prev, randomColor]);
            resolve();
        });
    };

    const activateMachineSequence = async () => {
        mainRef.current.style.pointerEvents = 'auto';
        await generateSequence();
    };

    useEffect(() => {
        const playMachineSequence = async () => {
            for (const color of machineSequence) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        activateButton(color);
                        resolve();
                    }, 1000);
                });
            }
        };

        if(machineSequence.length > 0){
            playMachineSequence();
        }
    }, [machineSequence, activateButton]);

    return { activateMachineSequence };
};