 function receiver(data,callback){
    callback(null,"Recebi a msg:"+data);
  };


  var Cliente = function Cliente(socket){
      this.connection = socket;

      this.connection.on('end', function () {
        console.log('Client disconnected');
      });

      this.connection.on('data', function (data) {
          receiver(data,function(err,msg){
            console.log(msg);
          });
      });
      this.connection.on('error', function (data) {
          receiver(data,function(err,msg){
            console.log(msg);
          });
      });
  }

  Cliente.prototype.send = function(data,callback){
    this.connection.write(data);
    callback(null,"msg-enviada!");
  };
  Cliente.prototype.leave = function(data,callback){
    this.connection.end();
    callback(null,"Usuário saiu!");
  };



module.exports = function(socket){
  return new Cliente(socket);
}
