import db from "./db";

export default {
  get: (roomId) => {
    return db.select().from("devices").where({room_id: roomId});
  },
  getMCDetails: (deviceId) => {
    return db.select("rooms.routing_key", "devices.id", "devices.pin")
      .from("devices").join("rooms", "devices.room_id", "=", "rooms.id")
      .where({"devices.id": deviceId});
  }
}