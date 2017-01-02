var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next){
  fs.readFile(__dirname+'/../users.json', function(err, data){
    if(err){
      console.log(err.stack);
    }else{
      usuarios = JSON.parse(data);
      console.log(usuarios);
      nombre = usuarios.users.nickname;
      password = usuarios.users.password;

      console.log(nombre +" " +password);

      var username = req.query.username;
      var pass = req.query.password;

      console.log(username+" "+pass);

      if(username == nombre && pass == password){
        res.render('sesion', {username: username});
      }
      else{
        res.end("No se encuentra lo que buscas");
      }
      //


    }
  });
});

module.exports = router;
