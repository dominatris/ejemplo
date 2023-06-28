function esPalindromo(palabra) {

    palabra = palabra.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    var invertida = palabra.split('').reverse().join('');
    
   
    return palabra === invertida;
 }
 
 console.log(esPalindromo("anita lava la tina"));
 console.log(esPalindromo("La ruta nos aportó otro paso natural"));
 console.log(esPalindromo("¡Hola mundo!"));
 console.log(esPalindromo("La ruta nos aporto otro paso natural"));