codigos-gob-bo
==============

Node.js, cliente para obtener informacion de codigos.gob.bo

## Requerimientos

*

## Instalación

    $ npm install codigos-gob-bo

## Uso

.. code:: json

  sesion.inicio({
    urlCodigos: 'domain-codigos',
    formato: 'json'
  })
  .then(function (cnn) {
    console.log(cnn);
    console.log('Verificada la conección a ');
  })
  .catch(function (err) {
    console.log("No se puede obtener información en el cliente: " + err);
  });
