/**
 * Node.js, cliente para obtener informacion de codigos.gob.bo.
 *
 * Módulo de peticiones a codigos.gob.bo y uso de promise para simplificar las funciones.
 * No requiere autenticacion codigos.gob.bo ofrece informacion abierta en distintos formatos.
 *
 * @module codigos-gob-bo
 * @author Teodoro Nina <tnina@adsib.gob.bo>
 * @license LPG-Bolivia
 */

"use strict";

var request_promise = require("request-promise");
var Promise = require("bluebird");

module.exports = {
    /**
     * Definiendo una isntancia
     *
     * @method
     * @returns {Promise}
     */
    inicio: function (parametros) {
        parametros = parametros || {};
        var c = new codigos(parametros);

        return Promise.resolve(c);
    }
}

function codigos(parametros) {
  var thisCodigos = this;
  thisCodigos.urlCodigos = null;
  thisCodigos.formato = 'json';
  parametros = parametros || {};

  if("urlCodigos" in parametros){
    thisCodigos.urlCodigos = parametros.urlCodigos;
  }else{
    thisCodigos.msg.error("url de fuente de datos no definido.");
  }

  if("formato" in parametros){
    thisCodigos.formato = parametros.formato;
  }else{
    thisCodigos.msg.warn("Se usara JSON.");
  }
};
