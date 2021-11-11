import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";

const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack;

  const forFade = ({ current }: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Navigator headerMode="none">
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="HomeScreen" component={HomeScreen} />

      <Screen
        name="NotFoundScreen"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Navigator>
  );
};

export default MainNavigator;
