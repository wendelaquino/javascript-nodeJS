const customExpress = require('./config/customExpress')
const pool = require('./conexao')


const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))