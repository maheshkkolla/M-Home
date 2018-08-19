import db from "./db";

export default {
  get: () => {
    return db.select().from("rooms");
  },
  getDetails: (roomId) => {
    return db.select().from("rooms").where({id: roomId});
  }
}