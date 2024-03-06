// server.js

import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    let server = createServer({
        environment,

        models: {
            ambiance: Model,
            audio: Model,
        },

        seeds(server) {
            // Define initial data
            server.db.loadData({
                ambiances: [
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
                    },
                    {
                        id: 11,
                        name: 'Custom',
                        audiosId: [
                            'airConditioner-1',
                            'birds-1',
                            'cat-1',
                            'chimes-1',
                            'copier-1',
                            'crickets-1',
                            'fire-1',
                            'insects-1',
                            'jazz-1',
                            'keyboard-1',
                            'loudRain-1',
                            'neon-1',
                            'people-1',
                            'rain-1',
                            'rainUmbrella-1',
                            'seagull-1',
                            'stream-1',
                            'thunder-1',
                            'tracks-1',
                            'waves-1',
                            'wind-1'
                        ],
                        emoji: '🎛️'
                    }
                ],
                audios: [
                    {
                        id: 'fire-1',
                        name: 'Fire',
                        file: '/audio/fire-1.mp3',
                        emoji: '🔥'
                    },
                    {
                        id: 'crickets-1',
                        name: 'Crickets',
                        file: '/audio/crickets-1.mp3',
                        emoji: '🦗'
                    },
                    {
                        id: 'tracks-1',
                        name: 'Tracks',
                        file: '/audio/tracks-1.mp3',
                        emoji: '🚂'
                    },
                    {
                        id: 'rainUmbrella-1',
                        name: 'Rain under umbrella',
                        file: '/audio/rainUmbrella-1.mp3',
                        emoji: '🌂'
                    },
                    {
                        id: 'birds-1',
                        name: 'Birds',
                        file: '/audio/birds-1.mp3',
                        emoji: '🐦'
                    },
                    {
                        id: 'waves-1',
                        name: 'Waves',
                        file: '/audio/waves-1.mp3',
                        emoji: '🌊'
                    },
                    {
                        id: 'insects-1',
                        name: 'Insects',
                        file: '/audio/insects-1.mp3',
                        emoji: '🐞'
                    },
                    {
                        id: 'wind-1',
                        name: 'Wind',
                        file: '/audio/wind-1.mp3',
                        emoji: '💨'
                    },
                    {
                        id: 'seagull-1',
                        name: 'Seagull',
                        file: '/audio/seagull-1.mp3',
                        emoji: '🐦‍⬛'
                    },
                    {
                        id: 'rain-1',
                        name: 'Rain',
                        file: '/audio/rain-1.mp3',
                        emoji: '🌦️'
                    },
                    {
                        id: 'chimes-1',
                        name: 'Chimes',
                        file: '/audio/chimes-1.mp3',
                        emoji: '🎐'
                    },
                    {
                        id: 'people-1',
                        name: 'People',
                        file: '/audio/people-1.mp3',
                        emoji: '👥'
                    },
                    {
                        id: 'jazz-1',
                        name: 'Jazz',
                        file: '/audio/jazz-1.mp3',
                        emoji: '🎷'
                    },
                    {
                        id: 'cat-1',
                        name: 'cat',
                        file: '/audio/cat-1.mp3',
                        emoji: '🐱'
                    },
                    {
                        id: 'loudRain-1',
                        name: 'Loud rain',
                        file: '/audio/loudRain-1.mp3',
                        emoji: '🌧️'
                    },
                    {
                        id: 'thunder-1',
                        name: 'Thunder',
                        file: '/audio/thunder-1.mp3',
                        emoji: '⚡'
                    },
                    {
                        id: 'stream-1',
                        name: 'Stream',
                        file: '/audio/stream-1.mp3',
                        emoji: '🏞️'
                    },
                    {
                        id: 'copier-1',
                        name: 'Copier',
                        file: '/audio/copier-1.mp3',
                        emoji: '🖨️'
                    },
                    {
                        id: 'airConditioner-1',
                        name: 'Air Conditioner',
                        file: '/audio/airConditioner-1.mp3',
                        emoji: '❄️'
                    },
                    {
                        id: 'neon-1',
                        name: 'neon',
                        file: '/audio/neon-1.mp3',
                        emoji: '💡'
                    },
                    {
                        id: 'keyboard-1',
                        name: 'keyboard',
                        file: '/audio/keyboard-1.mp3',
                        emoji: '⌨️'
                    }
                ],
            });
        },

        routes() {
            this.namespace = 'api';

            this.get('/ambiances', (schema) => {
                return schema.ambiances.all();
            });

            this.get('/audios', (schema) => {
                return schema.audios.all();
            });

            // Add more routes as needed
        },
    });

    return server;
}
