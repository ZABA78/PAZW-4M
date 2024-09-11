//https://nodejs.org/api/readline.html
var readline = require('readline');

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Jak masz na imie?', function(answer){
    console.log(answer);
    r1.close();
});
