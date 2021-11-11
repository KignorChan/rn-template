import React from "react";
import { View, Text } from "react-native";
import i18n from "../locale";

export default function FlatListNoDataView({ text }: { text?: string }) {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        paddingHorizontal: 40,
      }}
    >
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        {text ?? i18n.t("common.no_data")}
      </Text>
    </View>
  );
}
