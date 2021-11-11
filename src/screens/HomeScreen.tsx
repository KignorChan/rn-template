import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import i18n from "../locale";
import { Button, ButtonText } from "../components/Button";

import { RootStackParamList } from "../navigation/types";
import AppBar from "../components/AppBar";

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "HomeScreen">) {
  const [locale, setLocale] = React.useState("en");
  const changeLocale = (locale: string) => {
    i18n.locale = locale;
    setLocale(locale);
  };

  return (
    <View style={styles.screen}>
      <AppBar title={i18n.t("common.home")} navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t("common.home")}</Text>
        <Button
          onPress={() => {
            changeLocale("zh");
          }}
          style={styles.button}
        >
          <ButtonText style={styles.buttonText}>{i18n.t("chinese")}</ButtonText>
        </Button>

        <Button
          onPress={() => {
            changeLocale("en");
          }}
          style={styles.button}
        >
          <ButtonText style={styles.buttonText}>{i18n.t("english")}</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 15,
  },
});
