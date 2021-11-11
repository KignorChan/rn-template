import * as React from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";
import { useThemeColor, View, ViewProps } from "./Themed";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Ionicons, Entypo } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

function BackBtn({ backgroundColor, onPress }: any) {
  const btnsize = 30;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: btnsize,
          width: btnsize,
          backgroundColor,
          borderRadius: btnsize / 2 - 3,
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowOpacity: 0.4,
          elevation: 6,
          shadowRadius: 15,
          shadowOffset: { width: 4, height: 10 },
        }}
      >
        <Entypo name="chevron-left" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
}

// function Icon(props: {
//   name: React.ComponentProps<typeof Ionicons>["name"];
//   color: string;
// }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

export default function AppBar(
  props: ViewProps & {
    title?: string;
    withBackBtn?: boolean;
    statusBarColor?: string;
    titleStyle?: object;
    titleMaxLines?: number;
    navigation?: any;
    tail?: JSX.Element | null;
  }
) {
  const {
    style,
    lightColor,
    darkColor,
    title,
    withBackBtn,
    statusBarColor,
    titleStyle,
    titleMaxLines,
    navigation,
    tail,
    ...otherProps
  } = props;
  const appBarColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "appBarColor"
  );
  const statusBarHeight = getStatusBarHeight();

  const appBarHeight = 50;

  var showBack = navigation?.canGoBack() && withBackBtn;

  return (
    <View
      style={{
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 0.8,
        elevation: 1,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
      }}
    >
      <View
        style={{
          height: statusBarHeight,
          backgroundColor: statusBarColor ?? appBarColor,
        }}
      />
      <View
        {...props}
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: appBarColor,
            height: appBarHeight,
            width,
          },
          props.style,
        ]}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            backgroundColor: "transparent",
            width: 80,
            height: appBarHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showBack && (
            <BackBtn
              backgroundColor={appBarColor}
              onPress={() => {
                navigation?.canGoBack() ? navigation.pop() : null;
              }}
            />
          )}
        </View>
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <Text
            style={[
              {
                textAlign: "center",
                fontSize: 14,
                fontWeight: "700",
                backgroundColor: "transparent",
              },
              titleStyle,
            ]}
            numberOfLines={titleMaxLines ?? 1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "transparent",
            width: 80,
            height: appBarHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {tail}
        </View>
      </View>
    </View>
  );
}
