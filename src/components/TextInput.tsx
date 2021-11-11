import * as React from "react";
import {
  TextInput as DefaultTextInput,
  TextInputProps,
  useThemeColor,
} from "./Themed";

export function TextInput(props: TextInputProps) {
  return (
    <DefaultTextInput
      {...props}
      style={[
        {
          borderWidth: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        },
        props.style,
      ]}
    />
  );
}
