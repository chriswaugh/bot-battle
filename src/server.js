'use strict';

const Hapi = require('@hapi/hapi');
const PORT = process.env.PORT || 80

const server = Hapi.server({
	port: PORT,
	host: '0.0.0.0'
});

server.route([
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return h.response('hello world');
		}
	}
]);

exports.init = async () => {
	await server.initialize();
	return server;
};

exports.start = async () => {
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
	return server;
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});