import activitiesModule from "../modules/activities";

export default {
  getRecent: (devices) => {
    return Promise.all(devices.map((device) => {
      return activitiesModule.getRecent(device.id).then(result=>result[0]);
    })).then(activities => activities);
  }
}