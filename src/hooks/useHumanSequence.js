import { useState, useCallback, useContext } from "react";
import { SequenceContext } from "../contexts/SequenceContext";
import { gameSounds } from "../components/ColorData/colorData";
import useSound from "./useSound";
import playStyles from '../styles/Play.module.css';

export const useHumanSequence = (activateMachineSequence, mainRef) => {

    const [currentStep, setCurrentStep] = useState(0);
    const {humanSequence, setHumanSequence, machineSequence} = useContext(SequenceContext);
    const [gameStatus, setGameStatus] = useState('');
    let level = machineSequence.length - 1;

    const playWinningSound = useSound(gameSounds.winningSound.sound);
    const playLosingSound = useSound(gameSounds.losingSound.sound);

    const handleGameLost = (level) => {
        playLosingSound();
        mainRef.current.classList.add(playStyles.youlose);
        if(level === 0){
            return setGameStatus('Cuidado, procure um médico!');
        }
        if(level > 0 && level < 5){
            return setGameStatus(`Nível ${level}: Você precisa treinar mais!`);
        }
        if(level > 4 && level < 8){
            return setGameStatus(`Nível ${level}: Uau, boa memória!`);
        }
        if(level > 7 && level < 10){
            return setGameStatus(`Nível ${level}: Super memória!`);
        }
        if(level > 9){
            return setGameStatus(`Nível ${level}: Essa é a famosa memória de elefante!`);
        }
    };

    const watchHumanSequence = useCallback((clickedColor) => {
        if(clickedColor === machineSequence[currentStep]){
            if(currentStep === machineSequence.length - 1){
                setTimeout(() => playWinningSound(), 500);
                setCurrentStep(0);
                setHumanSequence([]);
                setTimeout(() => activateMachineSequence(), 2000);
            } else {
                setCurrentStep(currentStep + 1);
                setHumanSequence([...humanSequence, clickedColor]);
            }
        } else {
            handleGameLost(level);
        }
    }, [activateMachineSequence, currentStep, humanSequence, machineSequence, setHumanSequence, mainRef, level]);

    return { watchHumanSequence , gameStatus, setGameStatus };
};