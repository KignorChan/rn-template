export const tintColorLight = "#2f95dc";
export const tintColorDark = "#fff";

export const appThemeColor = "#5856DB";
export const cyanBlue = "#8FDEE1";
export const pink = "#E23E87";
export const grey = '#EFEFF0'
export default {
  light: {
    appThemeColor: appThemeColor,
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    buttonBorder: appThemeColor,
    buttonColor: appThemeColor,
    buttonTextColor: "white",
    textInputTextColor: "black",
    textInputBorderColor: tintColorLight,
    listViewBackgroundColor: "grey",
    appBarColor: "white",
  },
  dark: {
    appThemeColor: appThemeColor,
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    buttonBorder: tintColorLight,
    buttonColor: "#333333",
    buttonTextColor: "white",
    textInputTextColor: "white",
    textInputBorderColor: tintColorLight,
    listViewBackgroundColor: "grey",
    appBarColor: "black",
  },
};
