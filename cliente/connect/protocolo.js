
const separador = "#";

class Protocolo{

  constructor(){
    this._msg;
    this._tipo = ["A","C"];
    this._tamanho;

  }


  montarMsgAutenticacao(token){
    if(token)
      return this._montarPacoteDoProtocolo(this._tipo[0],token);

      throw Error("É necessário o token para autenticação!")

  }


  decodificar(data){

    let parametros = data.split("#");
    let acao = parametros[0];
    let tamanho = parametros[1];
    let msg = parametros[2];

    if(acao){
      this._acoes.get(acao)(msg,cliente);
    }else{
      throw Error("Não foi possível decodificar a msg!")
    }
  }

  _montarPacoteDoProtocolo(tipo,msg){

    let tamanhoMsg = msg.length;
    let pacote = tipo+this.separador+tamanhoMsg+this.separador+msg;
    return pacote;
  }

  get separador(){
    return separador;
  }

}


module.exports = function(){
  return new Protocolo();
}
