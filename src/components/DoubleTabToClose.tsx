import * as React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Platform, BackHandler, ToastAndroid } from "react-native";

export const ExecuteOnlyOnAndroid = (props: any) => {
  const mounted = useRef(true);
  const { message } = props;
  const [exitApp, setExitApp] = useState(0);
  const backAction = () => {
    setTimeout(() => {
      if (mounted.current) {
        setExitApp(0);
      }
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      if (mounted.current) {
        setExitApp(exitApp + 1);
      }

      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    mounted.current = true;
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => {
      mounted.current = false;
      backHandler.remove();
    };
  });
  return <></>;
};

export default function DoubleTapToClose(props: any) {
  const { message = "tap back again to exit the App" } = props;
  return Platform.OS !== "ios" ? (
    <ExecuteOnlyOnAndroid message={message} />
  ) : (
    <></>
  );
}
