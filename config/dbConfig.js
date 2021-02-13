const { createPool, createConnection } = require('mysql');

const pool = createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"elearningapp",
    connectionLimit:10
})
pool.connect(function(error){
    if(error) throw error;
    console.log('Connected to database')
})

module.exports = pool;

