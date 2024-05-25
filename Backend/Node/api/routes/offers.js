const express = require('express');
const router = express.Router();
const mysqlConnection = require('../connection/connection');

router.get('/get-game-offers', (req, res) =>{
    mysqlConnection.query('select * from games where offer = 1;',(error, rows, fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error)
        }
    })
});

router.get('/get-console-offers', (req, res) =>{
    mysqlConnection.query('select * from consoles where offer = 1;',(error, rows, fields) => {
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    })
})

router.get('/get-accessory-offers',(req, res)=>{
    mysqlConnection.query('select * from accessories where offer = 1;',(error,rows, fields) => {
        if(!error){
            res.json(rows);
        }else{
            console.log(error)
        }
    })
})

module.exports = router;