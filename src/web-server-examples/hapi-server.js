import Hapi from '@hapi/hapi';

const server = Hapi.server({
    port: 3001,
    host: 'localhost',
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: async (req, h) => {
        return 'Hello from Hapi!';
    }
});

server.start()
    .then(() => console.log("Hapi server is listening on port 3001."));