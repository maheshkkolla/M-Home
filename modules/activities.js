import db from "./db";

export default {
  getRecent: (deviceId) => {
    return db.select().from("activities")
      .where({device_id: deviceId})
      .orderBy("at", "desc").limit(1);
  }
}