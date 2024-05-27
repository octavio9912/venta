const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

//Importing JSonWebToken
const jwt = require('jsonwebtoken');

/*Make a route with the post method called singin*/
router.post('/', (req,res) => {
/*Saves de parameters 'Mail' and 'Password' from the request body*/
    const {mail,completeName, password, creditCard, expirationDate, ccv} = req.body;
    try{
/*Specifies the query and send the body arguments as parameters*/ 
    mysqlConnection.query('INSERT INTO users (userMail, userName, userPassword, creditCard, expirationDate, ccv) VALUES (?, ?, ?, ?, ?, ?);',
    [mail,completeName, password, creditCard, expirationDate, ccv],
     (error,rows,fields) => {
/*Verify if and error is present, if no procceds*/
        if(!error){
/*If the content of the rows is greater than 0 save the results on 'data', otherwise send a reply with 'Invalid data'*/            

                //console.log(JSON.stringify(rows[0].name));
                let data = "Usuario creado correctamente 😉";
/*Encrypts the stored data on a variable called token with a secret word*/
/*Send a reply with the encrypted token*/
                res.json({'operation': data});
        }else{
            console.log(error);
        }
    });
}catch(error){
    console.log(error);
    res.json('Invalid data');
}

});

module.exports = router;

