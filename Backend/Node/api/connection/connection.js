const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: 'gamestore',
    port: '3306',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
let promisePool = undefined;
try {
    promisePool = pool.promise(); // Promisify the pool for async/await support
    console.log('conected to DB succesfully')
} catch (error) {
    console.log(error)
}
module.exports = promisePool;
