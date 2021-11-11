import * as React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  useThemeColor,
} from "./Themed";

export function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    />
  );
}

export function ButtonText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonTextColor"
  );

  return <Text {...props} style={[{ color }, props.style]} />;
}
