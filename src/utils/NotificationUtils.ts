import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
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
  requestNotificationPermission();
}

async function requestNotificationPermission() {
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }
  } else {
    console.log("Must use physical device for Push Notifications");
  }
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
  requestNotificationPermission,
};
