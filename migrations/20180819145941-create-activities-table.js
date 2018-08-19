'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable("activities", {
    id: {type: "int", primaryKey: true, autoIncrement: true},
    device_id: {
      type: "int", foreignKey: {
        name: 'activity_device_id_fk',
        table: 'activities',
        rules: {
          onDelete: 'CASCADE'
        },
        mapping: 'id'
      }
    },
    action: "string",
    at: "timestamp"
  }, callback);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
