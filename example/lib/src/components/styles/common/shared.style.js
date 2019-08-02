import { Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import colors from "./colors";

export const isAndroid = Platform.OS === "android";

export const ifIPhoneXHeader = {
  ...ifIphoneX(
    {
      marginTop: 44
    },
    {
      marginTop: 16
    }
  )
};

export const shadowStyle = {
  buttonStyle: {
    shadowColor: colors.theme.light.shadowColor,
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  topStyle: {
    shadowColor: colors.theme.light.shadowColor,
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.3,
    shadowRadius: 10
  }
};

export const defaultShadowStyle = isAndroid
  ? {
      elevation: 5
    }
  : shadowStyle.buttonStyle;
