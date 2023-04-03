import playStyles from '../styles/Play.module.css';
import Button from '@/components/Button/Button';
import { useActivateButton } from '../hooks/useActivateButton';
import { useMachineSequence } from '../hooks/useMachineSequence';
import { useHumanSequence } from '../hooks/useHumanSequence';
import { SequenceContext } from '../contexts/SequenceContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Play () {

    const router = useRouter();
    const { machineSequence, setMachineSequence } = useContext(SequenceContext);
    const { mainRef , activateButton , activeButton } = useActivateButton();
    const { activateMachineSequence } = useMachineSequence(activateButton, mainRef);
    const {watchHumanSequence , gameStatus, setGameStatus} = useHumanSequence(activateMachineSequence, mainRef);

    const restartGame = () => {
        setMachineSequence([]);
        setGameStatus('');
        mainRef.current.classList.remove(playStyles.youlose);
    };

    return (

        <>
            <div className={playStyles.containerGeral}>

                <main className={playStyles.containerGame} ref={mainRef}>
                    <Button color='green' onClick={() => { activateButton('green'); watchHumanSequence('green')}} active={activeButton === 'green'} disabled={gameStatus}/>
                    <Button color='blue' onClick={() => { activateButton('blue'); watchHumanSequence('blue')}} active={activeButton === 'blue'} disabled={gameStatus}/>
                    <Button color='red' onClick={() => { activateButton('red'); watchHumanSequence('red')}} active={activeButton === 'red'} disabled={gameStatus}/>
                    <Button color='yellow' onClick={() => { activateButton('yellow'); watchHumanSequence('yellow')}} active={activeButton === 'yellow'} disabled={gameStatus}/>
                    {machineSequence.length === 0 && <section className={playStyles.gameInfo}>
                        <button className={playStyles.btnStart} onClick={() => activateMachineSequence()}>START</button>
                        <button className={playStyles.btnExit} onClick={() => router.push('/')}>X</button>
                    </section>}
                </main>

                {gameStatus && (
                    <div className={playStyles.gameStatus}>
                        <span>{gameStatus}</span>
                        <button onClick={() => restartGame()}>Jogar</button>
                        <button onClick={() => { restartGame(); router.push('/')}}>Sair</button>
                    </div>
                )}

            </div>
        </>
    )
};