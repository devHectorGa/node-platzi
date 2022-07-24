function hola(nombre, callBack) {
  console.log('Asíncrona');
  setTimeout(function () {
    console.log('Hola ' + nombre);
    callBack(nombre);
  }, 1000);
}

function hablar(callback) {
  setTimeout(function () {
    console.log('Bla bla bla');
    callback();
  }, 1000);
}

function adios(nombre, callBack) {
  console.log('Asíncrona');
  setTimeout(function () {
    console.log('Adios ' + nombre);
    callBack();
  }, 1000);
}

function conversacion(nombre, veces, callBack) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callBack);
    });
  } else {
    adios(nombre, callBack);
  }
}

console.log('Iniciando');
hola('Hector', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Proceso terminado');
  });
});
// hola('Hector', function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         hablar(function () {
//           adios(nombre, () => {
//             console.log('Terminando proceso');
//           });
//         });
//       });
//     });
//   });
// })
