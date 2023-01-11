const app = require('express')();
const consign = require('consign');

consign({cwd : 'src', verbose: false})
.include('./config/middlewares.js')
.then('./routes')
.then('./config/routes.js')
.into(app);

app.get('/', (req, res) => {
    res.status(200).send();
})

app.get('/users', (req, res) => {
    const users = [
        {name: "jhon Doe", mail: 'jhon@mail.com'}
    ];
    res.status(200).send(users);
})

app.post('/users', (req, res) => {
    res.status(201).json(req.body)
})

module.exports = app;