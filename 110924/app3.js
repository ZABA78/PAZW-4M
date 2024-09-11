//https://nodejs.org/api/readline.html
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Jak masz na imie? ', function(answer) {
  rl.question('Ulubiony język, ' + answer + '? ', function(language) {
    console.log('Ulubiony język: ' + language);
    
    rl.question('Drugie imię, ' + answer + '? ', function(name2) {
      console.log('Drugie imię: ' + name2);
      
      rl.question('Lubisz inne języki, ' + answer + '? ', function(language2) {
        console.log('Lubisz inne języki: ' + language2);
        rl.close();
      });
    });
  });
});
