/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import DoubleTapToClose from "../components/DoubleTabToClose";

import MainNavigator from "./MainNavigator";
import i18n from "../locale";

const isCurrentScreenInitialOne = (state: any): any => {
  const route = state.routes[state.index];
  if (route.name == "Root" && route.state) {
    // Dive into nested navigators
    return isCurrentScreenInitialOne(route.state);
  }
  return state.index === 0;
};

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const mounted = React.useRef(true);
  const [isInitialScreen, setIsInitialScreen] = React.useState(true);

  React.useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      /// 强制用light theme
      theme={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
      onStateChange={(state) => {
        if (mounted.current) {
          const isinitial = isCurrentScreenInitialOne(state);
          setIsInitialScreen(isinitial);
        }
      }}
    >
      {isInitialScreen && (
        <DoubleTapToClose message={i18n.t("special.double_to_exit")} />
      )}
      <MainNavigator />
    </NavigationContainer>
  );
}
