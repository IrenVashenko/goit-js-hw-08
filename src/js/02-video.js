import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const saveKey = "videoplayer-current-time";
const player = new Player('vimeo-player');

player.on('timeupdate', throttle((data) => {
    // console.log({
    //     duration: 61.857,
    //     percent: 0.049,
    //     seconds: 3.034
    // })
    localStorage.setItem(saveKey, JSON.stringify(data.seconds), 1000);
}));

const seconds = localStorage.getItem(saveKey);

if (seconds) {
    player.setCurrentTime(seconds);
};