import db from "./db";

export default {
  get: (roomId) => {
    return db.select().from("devices").where({room_id: roomId});
  }
}