import { Platform } from "react-native";
import colors from "./colors";
import { isIPhoneNotchFamily } from "@freakycoder/react-native-helpers";

export const isAndroid = Platform.OS === "android";

export const ifIPhoneXHeader = {
  marginTop: isIPhoneNotchFamily() ? 44 : 16,
};

export const shadowStyle = {
  buttonStyle: {
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 1 },
    shadowColor: colors.theme.light.shadowColor,
  },
  topStyle: {
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -6 },
    shadowColor: colors.theme.light.shadowColor,
  },
};

export const defaultShadowStyle = isAndroid
  ? {
      elevation: 5,
    }
  : shadowStyle.buttonStyle;
