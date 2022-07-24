function hola(nombre, callBack) {
  console.log('Asíncrona');
  setTimeout(function () {
    console.log('Hola ' + nombre);
    callBack(nombre);
  }, 1000);
}
function adios(nombre, callBack) {
  console.log('Asíncrona');
  setTimeout(function () {
    console.log('Adios ' + nombre);
    callBack();
  }, 1000);
}

console.log('Iniciando');
hola('Hector', function (nombre) {
  adios(nombre, () => {
    console.log('Terminando proceso');
  });
});
