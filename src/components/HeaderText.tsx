import * as React from "react";

import { Text, TextProps } from "./Themed";

export function HeaderText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontSize: 22, fontWeight: "700", color: "black" }]}
    />
  );
}
