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
  db.createTable("devices", {
    id: {type: "int", primaryKey: true, autoIncrement: true},
    name: "string",
    room_id: {
      type: "int", foreignKey: {
        name: 'device_room_id_fk',
        table: 'rooms',
        rules: {
          onDelete: 'CASCADE'
        },
        mapping: 'id'
      }
    },
    pin: "string",
    image_path: "string"
  }, callback);
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
