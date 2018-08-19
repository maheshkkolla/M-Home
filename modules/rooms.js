import db from "./db";

export default {
  get: () => {
    return db.select().from("rooms");
  }
}