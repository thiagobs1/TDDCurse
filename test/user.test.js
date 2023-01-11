const request = require('supertest');

const app = require('../src/app.js');

test('should list all users', () => {
    return request(app).get('/users')
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('name', 'jhon Doe');
    })
})

test('insert correctly a new user', () => {
    return request(app).post('/users')
    .send({name:"walter", mail: 'walter@mail.com'})
    .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('walter')
    })
})