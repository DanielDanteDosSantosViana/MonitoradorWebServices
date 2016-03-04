
const net = require('net');
const JSONStream = require('JSONStream');


function AgentSocket(){
  this._agentSocket = null;
  this._protocolo = require('../protocolo/protocolo');
}


AgentSocket.prototype.connect = function(properties, callback){
      console.log(properties.properties.port);

  this._agentSocket = net.connect(properties.properties.port ,properties.properties.ip,() => {
    console.log('connected to server!');
    callback(null,'connected');
  });

  this._dataReceiver((retorno)=>{
    console.log(retorno);
  });

  this._disconnect();

};

AgentSocket.prototype.send = function(data,callback){

  this._agentSocket.write(JSONStream.stringify(data));
  this._agentSocket.end();
  callback(null,"MsgEnviada: "+ JSON.stringify(data));
};


AgentSocket.prototype._dataReceiver = function(callback){
  this._agentSocket.on('data', (data) => {
  this._agentSocket.end();
  callback(data);

  });
}

AgentSocket.prototype._disconnect = function(){
  this._agentSocket.on('end', () => {
  console.log('disconnected from server');
  });

}

module.exports = function() {
  return new AgentSocket();
};


