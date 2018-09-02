import activitiesModule from "../modules/activities";
import devicesServices from "./devices";
import MQTTService from "./MQTTService";

export default {
  getRecent: (devices) => {
    return Promise.all(devices.map((device) => {
      return activitiesModule.getRecent(device.id).then(result =>  result[0] ? result[0] : {});
    })).then(activities => activities);
  },

  newAction: (data) => {
    return devicesServices.getMCDetails(data.id).then((mcDetails) => {
      return MQTTService.publish(Object.assign(mcDetails, {action: data.action}));
    })
  },

  create: (data) => {
    return activitiesModule.create({
      device_id: data.deviceId,
      action: data.action ? "ON" : "OFF",
      at: new Date().toISOString()
    });
  }
}