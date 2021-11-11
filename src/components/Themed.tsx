/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
  TextInput as DefaultTextInput,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  /// 强制用light theme
  // const theme = useColorScheme();
  const theme = "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TouchableOpacityProps = ThemeProps &
  DefaultTouchableOpacity["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonColor"
  );

  return (
    <DefaultTouchableOpacity
      style={[
        {
          backgroundColor,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </DefaultTouchableOpacity>
  );
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  const textInputTextColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "textInputTextColor"
  );

  const textInputBorderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "textInputBorderColor"
  );

  return (
    <DefaultTextInput
      style={[
        {
          color: textInputTextColor,
          borderColor: textInputBorderColor,

        },
        style,
      ]}
      {...otherProps}
    ></DefaultTextInput>
  );
}
