import React from "react";
import { Button, ButtonText } from "./Button";
import { GestureResponderEvent, StyleSheet } from "react-native";

export function GeneralButton({
  text,
  onPress,
  style,
}: {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: any;
}) {
  return (
    <Button onPress={onPress} style={[styles.button, style]}>
      <ButtonText style={styles.buttonText}>{text}</ButtonText>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonText: {
    letterSpacing: 1.5,
    fontSize: 16,
  },
});
