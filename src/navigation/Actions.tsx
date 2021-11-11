import { StackActions } from "@react-navigation/native";

export function popToTop(navigation: any) {
  if (navigation.canGoBack()) {
    navigation.dispatch(StackActions.popToTop());
  }
}
