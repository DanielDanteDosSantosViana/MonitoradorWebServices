var S = require('string');

function Request(hora,dia,ipSrc,ipDest,method,url){
  this.hora=hora,
  this.dia=dia,
  this.ipSrc=ipSrc,
  this.ipDest = ipDest,
  this.method=method,
  this.url=url

};

function parserPackageHTTP(callback){
    return function(data){
            var requests = [];
            var lines = S(data.toString()).trim().lines();

            lines.forEach(function(line) {
             if(S(line).contains(">")){
                var dia = S(line).trim().left(10).s;
                var hora = S(S(line).strip(dia).s).trim().left(9).s;
                var ipSrc = S(S(line).strip(hora,dia).s).trim().left(13).s;
                var ipDest = S(S(line).strip(hora,dia,ipSrc).s).trim().left(13).s;
                var method = S(S(line).strip(hora,dia,ipSrc,ipDest,">").s).trim().left(3).s;
                var url = S(S(line).strip(hora,dia,ipSrc,ipDest,">",method).s).trim();

                requests.push(new Request(hora,dia,ipSrc,ipDest,method,url));
             }
            });
         callback(requests);
    }

}

module.exports = parserPackageHTTP;
