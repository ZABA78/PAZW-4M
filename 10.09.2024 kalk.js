let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Podaj pierwszą liczbę: ', (a1) => {
    let a = parseInt(a1);

  rl.question('Podaj drugą liczbę: ', (a2) => {
    let b = parseInt(a2);

    rl.question('Wybierz operację (1 - dodawanie, 2 - odejmowanie): ', (dzialanie) => {
      let wynik;
      if (dzialanie == '1') {
        wynik = a + b;
      } else  if(dzialanie == '2'){
        wynik = a - b;
      }else{
        console.log(`zle dane`);  
      }
      console.log(`Wynik: ${wynik}`);
      rl.close();
    });
  });
});
