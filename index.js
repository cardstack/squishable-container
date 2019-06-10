'use strict';

module.exports = {
  name: require('./package').name,
  included: function(app){
    app.import('vendor/squishable-container.css');
  }
};
