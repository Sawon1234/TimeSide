define([
  '#qt_core/controllers/all'
],

function (A) {
  'use strict';

  

  var success = function (res) {
    if (res && res.body)
      return A._v.trigCfg('data.items.waveform','apiok',res.body);

    return A._v.trigCfg('data.items.waveform','apierror');    
  };

  var error = function (res) {
     return A._v.trigCfg('data.items.waveform','apierror');    
  };

  return function (data) {

    var itemId = data.itemId;delete data.itemId;
    data.format = 'json'; 

    return A.injector.get('api').getWaveform(data,{id : itemId})
      .on('success', success)
      .on('error', error);
  };
});
