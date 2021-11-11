import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export default function IconBtn({
  backgroundColor,
  size,
  onPress,
  child,
  style,
}: {
  backgroundColor?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void | undefined;
  child?: JSX.Element | null;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            height: size ?? 30,
            width: size ?? 30,
            backgroundColor: backgroundColor ?? "white",
            borderRadius: (size ?? 30) / 2 - 3,
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowOpacity: 0.4,
            elevation: 6,
            shadowRadius: 15,
            shadowOffset: { width: 4, height: 10 },
          },
          style,
        ]}
      >
        {child ?? (
          <Entypo name="dots-three-horizontal" size={16} color="black" />
        )}
      </View>
    </TouchableOpacity>
  );
}
