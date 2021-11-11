import * as React from "react";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { RootStackParamList } from "../navigation/types";

export default function SplashScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "SplashScreen">) {
  useEffect(() => {
    checkOnAppStart();
  }, []);

  const checkOnAppStart = () => {
    navigation.replace("HomeScreen");
  };

  return <View />;
}
