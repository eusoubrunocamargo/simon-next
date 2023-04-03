export const colorData = {
    green: { index: 0, sound: '/sounds/simonSound1.mp3'},
    blue: { index: 1, sound: '/sounds/simonSound2.mp3'},
    red: { index: 2, sound: '/sounds/simonSound3.mp3'},
    yellow: { index: 3, sound: '/sounds/simonSound4.mp3'},
};

export const gameSounds = {
    winningSound: { sound: '/sounds/winningSound.wav' },
    losingSound: { sound: '/sounds/losingSound.wav' },
};

export function getRandomColor () {
    const colorArray = Object.keys(colorData);
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
};

