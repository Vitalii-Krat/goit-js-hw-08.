
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onCatchTimePlay() {
  player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
  })};

player.on('timeupdate', throttle(onCatchTimePlay, 1000));
const stopTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(stopTime);