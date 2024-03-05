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
                        name: 'Forest',
                        audiosId: [
                            'insects-1', 'wind-1', 'birds-1'
                        ],
                        emoji: '🌲'
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
                        name: 'Jungle',
                        audiosId: [
                            'insects-1', 'birds-1', 'rain-1'
                        ],
                        emoji: '🦜'

                    },
                    {
                        id: 4,
                        name: 'Café',
                        audiosId: [
                            'people-1', 'cat-1', 'jazz-1'
                        ],
                        emoji: '☕'
                    },
                    {
                        id: 5,
                        name: 'Storm',
                        audiosId: [
                            'rain-1', 'thunder-1', 'wind-1'
                        ],
                        emoji: '⛈️'
                    }
                ],
                audios: [
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
                        id: 'cat-1',
                        name: 'cat',
                        file: '/audio/cat-1.mp3',
                        emoji: '🐱'
                    },
                    {
                        id: 'rain-1',
                        name: 'Rain',
                        file: '/audio/rain-1.mp3',
                        emoji: '🌧️'
                    },
                    {
                        id: 'thunder-1',
                        name: 'Thunder',
                        file: '/audio/thunder-1.mp3',
                        emoji: '⚡'
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
