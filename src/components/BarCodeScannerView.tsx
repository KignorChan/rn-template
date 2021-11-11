import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { BarCodeScanner } from "expo-barcode-scanner";
import Spacer from "./Spacer";
import { RootStackParamList } from "../navigation/types";

export default function BarCodeScannerView({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "BarCodeScannerView">) {
  const { onScanCompleted } = route.params;
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    if (onScanCompleted != null) {
      onScanCompleted(data);
    }

    navigation.pop();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Spacer height={80} />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    justifyContent: "flex-start",
    // justifyContent: "center",
  },
  barcodeScanner: {
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width,
  },
});
