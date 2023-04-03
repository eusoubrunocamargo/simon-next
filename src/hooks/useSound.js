import { useEffect, useState } from "react";
import { Howl } from 'howler';

const useSound = (sound) => {
    
    const [audio] = useState(new Howl({src: sound}));

    const [play, setPlay] = useState(() => async () => {
        if(audio){
            audio.play();
            await new Promise((resolve) => {
                audio.once('end', () => {
                    audio.stop();
                    resolve();
                });
            });
        }
    });

    useEffect(() => {
        window.onload = () => {
            let context = new AudioContext();
            context.resume().then(() => {
                 setPlay(async () => {
                    if(audio){
                        audio.play();
                        await new Promise((resolve) => {
                            audio.once('end', () => {
                                audio.stop();
                                resolve();
                            });
                        });
                    }
                });
            });
        }
    }, [audio]);

        return play;

    
    // return play;

};

export default useSound;