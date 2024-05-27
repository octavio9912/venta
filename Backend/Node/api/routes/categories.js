const express = require('express');
const router = express.Router();
const mysqlConnection = require('../connection/connection');

router.get('/get-games',(req,res)=>{
        mysqlConnection.query('select * from games',(error, rows, fields)=>{
            if(!error){
                res.json(rows);
            }else{
                console.log(error);
            }
        })
});


router.get('/get-consoles',(req,res)=>{

        mysqlConnection.query('select * from consoles',(error, rows, fields)=>{
            if(!error){
                res.json(rows);
            }else{
                console.log(error);
            }
        })
});

router.get('/get-accessories',(req,res)=>{

        mysqlConnection.query('select * from accessories',(error, rows, fields)=>{
            if(!error){
                res.json(rows);
            }else{
                console.log(error);
            }
        })
});

module.exports = router;