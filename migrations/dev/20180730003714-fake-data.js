'use strict';

var async = require('async');
var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};


exports.up = function (db, callback) {
  async.series([
    db.insert.bind(db, 'station', ["token","name"],["as2f348*aiAHFQ1","69 compañia"]),
    db.insert.bind(db, 'station', ["token","name"],["as2f34hdfgkjlQ1","70 compañia"]),
    db.insert.bind(db, 'patient_history', ["paramedic_name","patient_name","resume","gps"],["braulio padilla","Melannie Solares","resumen","123.23 123.153"]),
    db.insert.bind(db, 'patient_history', ["paramedic_name","patient_name","resume","gps"],["braulio padilla","Armando maradiaga","resumen","123.23 123.153"])
  ], callback);
};

exports.down = function (db, callback) {
  callback();
};
exports._meta = {
  "version": 1
};
