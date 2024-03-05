import birds1 from './assets/audio/birds-1.mp3';
import cat1 from './assets/audio/cat-1.mp3';
import insects1 from './assets/audio/insects-1.mp3';
import jazz1 from './assets/audio/jazz-1.mp3';
import people1 from './assets/audio/people-1.mp3';
import rain1 from './assets/audio/rain-1.mp3';
import seagull1 from './assets/audio/seagull-1.mp3';
import thunder1 from './assets/audio/thunder-1.mp3';
import waves1 from './assets/audio/waves-1.mp3';
import wind1 from './assets/audio/wind-1.mp3';

export const ambianceData = [
    {
        id: 1,
        name: 'Campfire',
        audiosId: [
            'fire-1', 'crickets-1'
        ],
        emoji: '🔥'
    },
    {
        id: 2,
        name: 'Beach',
        audiosId: [
            'wind-1', 'waves-1', 'seagull-1'
        ],
        emoji: '🏖️'
    },
    {
        id: 3,
        name: 'Train',
        audiosId: [
            'tracks-1', 'wind-1'
        ],
        emoji: '🚂'
    },

    {
        id: 4,
        name: 'Rainfall',
        audiosId: [
            'rain-1', 'rainUmbrella-1'
        ],
        emoji: '🌧️'

    },
    {
        id: 5,
        name: 'Forest',
        audiosId: [
            'birds-1', 'wind-1', 'insects-1'
        ],
        emoji: '🌲'

    },
    {
        id: 6,
        name: 'Garden',
        audiosId: [
            'chimes-1', 'wind-1', 'insects-1'
        ],
        emoji: '🌷'

    },
    {
        id: 7,
        name: 'Café',
        audiosId: [
            'people-1', 'cat-1', 'jazz-1' /*'coffee maker' */
        ],
        emoji: '☕'
    },
    {
        id: 8,
        name: 'Thunderstorm',
        audiosId: [
            'rain-1', 'loudRain-1', 'thunder-1', 'wind-1'
        ],
        emoji: '⛈️'
    },
    {
        id: 9,
        name: 'Creek',
        audiosId: [
            'stream-1', 'wind-1'
        ],
        emoji: '🏞️'
    },
    {
        id: 10,
        name: 'Office',
        audiosId: [
            'people-1', 'copier-1', 'airConditioner-1', 'fluorescentHum-1', 'keyboard-1'
        ],
        emoji: '🏢'
    }
];
export const audios = [
    {
        id: 'birds-1',
        name: 'Birds',
        file: birds1,
        emoji: '🐦'
    },
    {
        id: 'waves-1',
        name: 'Waves',
        file: waves1,
        emoji: '🌊'
    },
    {
        id: 'insects-1',
        name: 'Insects',
        file: insects1,
        emoji: '🐞'
    },
    {
        id: 'cat-1',
        name: 'cat',
        file: cat1,
        emoji: '🐱'
    },
    {
        id: 'rain-1',
        name: 'Rain',
        file: rain1,
        emoji: '🌧️'
    },
    {
        id: 'thunder-1',
        name: 'Thunder',
        file: thunder1,
        emoji: '⚡'
    },
    {
        id: 'wind-1',
        name: 'Wind',
        file: wind1,
        emoji: '💨'
    },
    {
        id: 'seagull-1',
        name: 'Seagull',
        file: seagull1,
        emoji: '🐦‍⬛'
    },
    {
        id: 'people-1',
        name: 'People',
        file: people1,
        emoji: '👥'
    },
    {
        id: 'jazz-1',
        name: 'Jazz',
        file: jazz1,
        emoji: '🎷'
    }
];

