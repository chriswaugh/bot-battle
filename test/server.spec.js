'use strict';

const { init } = require('../src/server');

let server;

beforeEach(async () => {
	server = await init();
});

afterEach(async () => {
	await server.stop();
});

describe('GET /', () => {

	const request = {
		method: 'GET',
		url: '/'
	};

	it('responds with 200', async () => {
		const res = await server.inject(request);
		expect(res.statusCode).toBe(200);
	});

	it('responds with hello world', async () => {
		const res = await server.inject(request);
		expect(res.payload).toBe('hello world');
	});

});