import mqtt from "mqtt";
import activitiesService from "./activities";

export default {
  publish: (data) => {
    return new Promise((resolve, reject) => {
      const client = mqtt.connect(process.env.MQTT_URL, {
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD
      });
      const message = {pin: data.pin, action: data.action, deviceId: data.deviceId};
      client.publish(data.routingKey, JSON.stringify(message), {qos: 1}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  subscribe: () => {
    const client = mqtt.connect(process.env.MQTT_URL, {
      username: process.env.MQTT_USERNAME,
      password: process.env.MQTT_PASSWORD
    });
    client.on("connect", () => {
      client.subscribe("M-Home-activity");
    });

    client.on("message", function(topic, message) {
      function parseMessage(message) {
        try {
          return JSON.parse(message);
        } catch(e) {
          console.error("Error parsing message", e);
          return {};
        }
      }

      activitiesService.create(parseMessage(message)).catch((error) => {
        console.error("Error while inserting into activities: ", error);
      });
    });

  }
}