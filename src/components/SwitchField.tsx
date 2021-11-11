import React, { useState } from "react";
import { StyleSheet, Image, Switch } from "react-native";
import { View, Text } from "./Themed";
import Colors from "../constants/Colors";

export function SwitchField({
  title,
  titleStyle,
  subtitle,
  switchInitValue,
  onSwitchChanged,
  borderStyle,
}: {
  title?: string;
  titleStyle?: any;
  subtitle?: string;
  switchInitValue?: boolean;
  onSwitchChanged: (enabled: boolean) => void;
  borderStyle?: any;
}) {
  const [isEnabled, setIsEnabled] = useState(switchInitValue ?? false);

  const toggleSwitch = () => {
    var enabled = !isEnabled;
    setIsEnabled(enabled);

    if (onSwitchChanged != null) {
      onSwitchChanged(enabled);
    }
  };

  return (
    <View style={[styles.container, borderStyle]}>
      <View style={styles.textArea}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={{ justifyContent: "flex-start" }}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? Colors.light.buttonColor : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {/* <View style={{ height: 30 }}></View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 120,
    // backgroundColor: "pink",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  textArea: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    fontWeight: "600",
    color: "grey",
    fontSize: 12,
  },

  switcher: {},
});
