const net = require('net');

var gerenciador = require('../infra/Gerenciador.js')();


var Server = function(propertiesServer){
  this.properties = propertiesServer;
  this.gerenciador = gerenciador;
}
Server.prototype.start = function(){
  this._server = net.createServer(function (c) {
                c.on('data', function (data) {
            var json = JSON.parse(data.toString('utf8'));
            console.log(json.usuario);
          });
  }).listen(this.properties.port);
  console.log("MWeb-Server(version 1.0.0) Online .\n");


  this._server.on('error', (e) => {
    console.log("Error ao conectar...\n "+ e);
  });
};
Server.prototype.leave = function(callback){
  if(this._server){
      this._server.end();
      callback(null,"Server Desligado...");
  }else{
    callback("Error, Não foi encontrado server...",null);
  }
};

Server.prototype.getClienteOnlineById = function(id,callback){
    gerenciador.find(id,function(err,c){
      if(!err){
        callback(null,c);
      }else{
        callback(err,null);
      }
    });
};

module.exports = function(propertiesServer){
    return new Server(propertiesServer);
};
