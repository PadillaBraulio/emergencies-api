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
    db.createTable.bind(db, 'station', {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      token: { type:'string', notNull: true } ,
      name: 'string'
    }),
    db.createTable.bind(db, 'patient_history', {
      id: { type: 'int', primaryKey: true , autoIncrement: true },
      paramedic_name: 'string',
      patient_name: 'string',
      resume: 'string',
      gps: 'string'
    })
  ], callback);
};

exports.down = function (db, callback) {
  async.series([
    db.dropTable.bind(db, 'station'),
    db.dropTable.bind(db, 'patient_history')
  ], callback);
};
exports._meta = {
  "version": 1
};
