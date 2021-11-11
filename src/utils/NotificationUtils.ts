import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import iStorage from "./iStorage";

const NOTIFICATION_STATUS = {
  ENABLE: "ENABLE",
  DISABLE: "DISABLE",
};

async function initNotification() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  Permissions.getAsync(Permissions.NOTIFICATIONS).then((result) => {
    if (result.status == "granted") {
      console.log("notificaition permission granted");
    } else {
      return Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
  });
}

async function schedulePushNotification(
  title: string,
  body: string,
  data?: any
) {
  const enableNotification = await isNotificationEnable();
  if (enableNotification == true) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
      },
      trigger: { seconds: 2 },
    });
  }
}

async function isNotificationEnable(): Promise<boolean> {
  const result = await iStorage.storage.getItem(
    iStorage.keys.ENABLE_NOTIFICATION
  );
  if (result != null) {
    if (result == NOTIFICATION_STATUS.ENABLE) {
      return true;
    } else if (result == NOTIFICATION_STATUS.DISABLE) {
      return false;
    }
  }

  return true;
}

async function setEnableNotification(enable: boolean) {
  if (enable) {
    await iStorage.storage.setItem(
      iStorage.keys.ENABLE_NOTIFICATION,
      NOTIFICATION_STATUS.ENABLE
    );
  } else {
    await iStorage.storage.setItem(
      iStorage.keys.ENABLE_NOTIFICATION,
      NOTIFICATION_STATUS.DISABLE
    );
  }
}

export default {
  initNotification,
  schedulePushNotification,
  isNotificationEnable,
  setEnableNotification,
};
