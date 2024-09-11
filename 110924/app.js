//process.stdout.write('witaj \n');

process.stdin.on('data', function(name){
    console.log('Witaj' + name.toString());
    
});