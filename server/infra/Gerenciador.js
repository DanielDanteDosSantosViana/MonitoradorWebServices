
var Gerenciador = function Gerenciador(){
   this.clientes = [];
}

Gerenciador.prototype.connect = function(c,callback){
  this.clientes.push(require('../model/Cliente')(c));
  callback(null, "Connectado com sucesso!");
};

Gerenciador.prototype.find = function(id,callback){
 this.clientes.forEach(function (cliente) {
        if(cliente.id==id){
          callback(null,cliente);
        }
    });
 callback("Cliente não encontrado", null);
};

Gerenciador.prototype.remove = function(id,callback){
    this.clientes.forEach(function(cliente){
        if(cliente.id==id){
           this.clientes = this.clientes.splice(this.clientes.indexOf(cliente), 1);
        }
    });
};


module.exports = function(){
  return new Gerenciador();
}

