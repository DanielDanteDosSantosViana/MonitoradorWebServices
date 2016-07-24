var ipc = require('electron').ipcRenderer;
var cliente  = require('../../connect/client')();
var protocolo  = require('../../connect/protocolo')();

angular
    .module('Controller')
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.token;

        $scope.entrar = function(){
          var properties = {
           port : '4001'
          };

          cliente.connect(properties,function(conectado){
            if(conectado){
              cliente.sendMsg(protocolo.montarMsgAutenticacao($scope.token));
            }
          });
      }


}]);

