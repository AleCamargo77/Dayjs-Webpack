const path = require("path"); //Modulo do Node para trabalhar com caminhos

module.exports = {
  entry: {
    main: "./src/index.js", //Criar arquivo na ponto de entrada dentro da pasta dist
    hello: "./src/hello.js", //Criando um novo arquivo de ponto de entrada e especificar a saida abaixo
  },
  mode: "development", //Mode em desenvolvimento para visulizar melhor o arquivo de saida, ultilizar modo production minificar arquivo
  // output: {
  //   path: path.resolve(__dirname, "public"), //path.resolve(__dirname) Ele setou no caminho atual e criou a pasta public como saida
  //   filename: "[name]bundle.minjs", //nome do arquivo de saida - Usar [name] quando tiver mais um arquivo de entrada
  // },
};
