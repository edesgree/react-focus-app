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
        name: 'Forest',
        audiosId: [
            'insects-1', 'wind-1', 'birds-1'
        ]
    },
    {
        id: 2,
        name: 'Seaside',
        audiosId: [
            'wind-1', 'waves-1', 'seagull-1'
        ],
    },
    {
        id: 3,
        name: 'Jungle',
        audiosId: [
            'insects-1', 'birds-1', 'rain-1'
        ],
    },
    {
        id: 4,
        name: 'Café',
        audiosId: [
            'people-1', 'cat-1', 'jazz-1'
        ],
    },
    {
        id: 5,
        name: 'Storm',
        audiosId: [
            'rain-1', 'thunder-1', 'wind-1'
        ],
    }
];
export const audios = [
    {
        id: 'birds-1',
        name: 'Birds',
        file: birds1
    },
    {
        id: 'waves-1',
        name: 'Waves',
        file: waves1
    },
    {
        id: 'insects-1',
        name: 'Insects',
        file: insects1
    },
    {
        id: 'cat-1',
        name: 'cat',
        file: cat1
    },
    {
        id: 'rain-1',
        name: 'Rain',
        file: rain1
    },
    {
        id: 'thunder-1',
        name: 'Thunder',
        file: thunder1
    },
    {
        id: 'wind-1',
        name: 'Wind',
        file: wind1
    },
    {
        id: 'seagull-1',
        name: 'Seagull',
        file: seagull1
    },
    {
        id: 'people-1',
        name: 'People',
        file: people1
    },
    {
        id: 'jazz-1',
        name: 'Jazz',
        file: jazz1
    }
];

