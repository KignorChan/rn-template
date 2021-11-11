import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import { appThemeColor } from "../constants/Colors";

export default function Loader({
  isLoading,
  transparent,
  modalStyle,
}: {
  isLoading: boolean;
  transparent?: boolean;
  modalStyle?: ViewStyle;
}) {
  return (
    <Modal
      transparent={transparent ?? true}
      animationType={"fade"}
      visible={isLoading}
      style={{ zIndex: 1100 }}
      onRequestClose={() => {}}
      statusBarTranslucent={true}
    >
      <View style={[styles.modalBackground, modalStyle]}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator color={appThemeColor} />

          {/* If you want to image set source here */}
          {/* <Image
              source={require('../assets/images/loader.gif')}
              style={{ height: 80, width: 80 }}
              resizeMode="contain"
              resizeMethod="resize"
            /> */}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
