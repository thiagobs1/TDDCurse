const app = require('./app');

app.listen(3001, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Servidor rodando com sucesso!');
    }
})