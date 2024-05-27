const mysqlPool = require('../connection/connection'); // Adjust the path if needed

async function executeQuery(query, params) {
    try {
        const [rows, fields] = await mysqlPool.execute(query, params);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}
module.exports = executeQuery; 