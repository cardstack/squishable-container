/* eslint-env node */
'use strict';

module.exports = {
  name: 'squishable-container',
  included: function(app){
    app.import('vendor/squishable-container.css');
  }
};
