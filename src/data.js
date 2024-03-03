import birds from './assets/audio/birds.wav';
import cat from './assets/audio/cat.wav';
import insects from './assets/audio/insects.wav';
import rain from './assets/audio/rain.wav';
import waves from './assets/audio/waves.wav';
export const ambianceData = [
    {
        id: 1,
        name: 'Ambiance 1',
        audiosId: [
            1, 2, 3
        ]
    },
    {
        id: 2,
        name: 'Ambiance 2',
        audiosId: [
            4, 5
        ],
    }
];
export const audios = [
    {
        id: 1,
        name: 'Birds',
        file: birds
    },
    {
        id: 2,
        name: 'Waves',
        file: waves
    },
    {
        id: 3,
        name: 'Insects',
        file: insects
    },
    {
        id: 4,
        name: 'cat',
        file: cat
    },
    {
        id: 5,
        name: 'Rain',
        file: rain
    },
];
