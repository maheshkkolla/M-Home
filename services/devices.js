import devicesModule from "../modules/devices";
import activitiesService from "./activities";


export default {
  get: (roomId) => {
    return devicesModule.get(roomId).then((devices) => {
      return Promise.all([devices, activitiesService.getRecent(devices)]);
    }).then(([devices, activities]) => {
      return devices.map((device) => {
        const activity = activities.find(a => a.device_id === device.id);
        return Object.assign(device, {recent_activity: activity});
      });
    });
  },
  getMCDetails: (deviceId) => {
    return devicesModule.getMCDetails(deviceId).then(result => { return {
      deviceId: result[0].id,
      pin: result[0].pin,
      routingKey: result[0].routing_key
    }});
  }
};

