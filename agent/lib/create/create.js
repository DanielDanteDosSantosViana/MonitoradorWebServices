var utils = require('../utils'),
  protocol = require('../protocol')


function create(email,senha){

  var configUser = function(email,senha){
    this.email = email,
    this.senha = senha;
  }

  utils.log("info","Criando Usuário...");
  protocol.create(new configUser(email,senha),function(response){
       utils.log("status","Usuário criado com sucesso[OK]");
       utils.log("info","login: "+email +" Senha: "+senha);
      },function(error,msg){
              utils.log("error",msg);
      }
  );
};


module.exports = create;
