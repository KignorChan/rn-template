import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./en";
import zh from "./zh";
// Set the key-value pairs for the different languages you want to support.
i18n.defaultLocale = "en";
i18n.fallbacks = true;
i18n.translations = {
  en,
  zh,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export default i18n;
