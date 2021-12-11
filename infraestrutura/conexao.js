const {Pool} = require('pg')

const pool = new Pool({
    user    : 'lvtzagbdxqyivg',           // Username of database user
    host        : 'ec2-18-233-83-165.compute-1.amazonaws.com',         // Postgres ip address or domain name
    database    : 'd19kmqttmsg784',        // Name of database to connect to
    password    : '5dc2bfd33687e11bca398451cf77ec309311fc7e09ce382983f231d466dda0ed',        // Password of database user
    port        : 5432,                        // Postgres server port
})

module.exports = pool
