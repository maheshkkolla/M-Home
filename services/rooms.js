import roomsModule from "../modules/rooms";

export default {
  get: () => {
    return roomsModule.get();
  }
}