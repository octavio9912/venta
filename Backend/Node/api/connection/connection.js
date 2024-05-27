const mysql = require('mysql');

function establishConnection() {
    return mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: 'gamestore',
        port: '3306'
    });
}

let mysqlConnection = establishConnection();

function handleDisconnect() {
    mysqlConnection = establishConnection();

    mysqlConnection.connect(error => {
        if (error) {
            console.error('Error while connecting to database:', error);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        } else {
            console.log('Connection successful to database');
        }
    });

    mysqlConnection.on('error', error => {
        console.error('Database error:', error);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Reconnecting to database...');
            handleDisconnect(); // Reconnect
        } else {
            throw error;
        }
    });
}

handleDisconnect();

module.exports = mysqlConnection;
