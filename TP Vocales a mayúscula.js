var fs = require("fs");
var archivo = process.argv[2];

//leo el archivo que paso por consola.
fs.readFile(archivo, 'utf-8', function(err, data) {
    if (err) throw err;
    //Cambio vocales por mayusculas.
    data = data.replace(/a/g, 'A');
    data = data.replace(/e/g, 'E');
    data = data.replace(/i/g, 'I');
    data = data.replace(/o/g, 'O');
    data = data.replace(/u/g, 'U');
    
    //Creo un archivo nuevo que va a tener la 'data' con sus vocales
    //pasadas a mayuscula.
    fs.writeFile('mayusculas.txt', data, function(err) {
        if (err) throw err;
        //Callback para saber cuando terminó el proceso
        console.log('Done!');
    });
})