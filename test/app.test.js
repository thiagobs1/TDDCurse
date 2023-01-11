const request = require('supertest');

const app = require('../src/app.js');

test('should respond in root', () => {
    return request(app).get('/')
    .then(res => expect(res.status).toBe(200));
})

