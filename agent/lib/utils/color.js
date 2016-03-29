
function color(c, str) {
  return (color[c] || color.black) + str + color.black;
}
// Criando variavel para deixar um pouco mais simples
color.red = '\x1B[31m';
color.yellow = '\x1B[33m';
color.green = '\x1B[32m';
color.black = '\x1B[39m';


module.exports = color;
