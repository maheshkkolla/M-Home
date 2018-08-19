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
  }
};

