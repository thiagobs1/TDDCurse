const supertest = require('supertest');

const request = supertest('http://localhost:3001')

describe('test the server', () => {
    test('port should respond in the 3001 port', () => {
        return request.get('/')
        .then(res => expect(res.status).toBe(200))
    })
})