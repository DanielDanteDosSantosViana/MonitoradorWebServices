"use strict";

class ClienteTLS{

  constructor(){
    this._tls = require('tls');
    this._connection;
    this._options = {
        key:  this.fs.readFileSync('client_key.pem'),
        cert: this.fs.readFileSync('client_cert.pem')
    };

  }

  connect(properties,callback){
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    let connection = this._tls.connect(properties.port, '0.0.0.0' ,this._options, function() {
          console.log("Conexão autorizada.");
          callback(true);
          connection.on("data", function (data) {
                console.log(data.toString());
          });
    });
    this._connection = connection;
  }

  sendMsg(msg){
    this._connection.write(msg);
  }

  get fs(){
     return require('fs');
  }
}


module.exports = function(){
  return new ClienteTLS()
};
