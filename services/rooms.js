import roomsModule from "../modules/rooms";
import devicesService from "./devices";

export default {
  get: () => {
    return roomsModule.get();
  },
  getDetails: (roomId) => {
    return roomsModule.getDetails(roomId)
      .then(result => result[0])
      .then((room) => {
        return Promise.all([room, devicesService.get(room.id)]);
      }).then(([room, devices]) => {
        return Object.assign(room, {devices: devices});
      });
  }
}