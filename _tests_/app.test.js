const request = require('supertest');
const app = require('../index');

test('GET /', async () => {
	  const res = await request(app).get('/');
	  expect(res.statusCode).toBe(200);
	  expect(res.body.msg).toBe('Hello from app');
});

