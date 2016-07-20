codigos-gob-bo
==============

Node.js, cliente para obtener informacion de codigos.gob.bo

## Requerimientos

*

## Instalación

    $ npm install codigos-gob-bo

## Uso
export function codigos(req, res) {
  var sesion = require("codigos-gob-bo");

  sesion.inicio({
    urlCodigos: 'domain-codigos',
    formato: 'json'
  })
  .then(function (cnn) {
    console.log(cnn);
    res.send(cnn).end;
  })
  .catch(function (err) {
    console.log("No se puede obtener información en el cliente: " + err);
  });
}
