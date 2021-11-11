import React from "react";
import { View } from "react-native";

const Spacer = ({
  height,
  width,
  color,
}: {
  height?: number;
  width?: number;
  color?: any;
}) => (
  <View
    style={{
      height: height ?? 0,
      width: width ?? 0,
      backgroundColor: color ?? "transparent",
    }}
  />
);

export default Spacer;
