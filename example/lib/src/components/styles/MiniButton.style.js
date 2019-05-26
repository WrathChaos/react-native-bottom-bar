import { Platform } from "react-native";

export default {
  miniIconStyle: {
    ...Platform.select({
      ios: {
        right: 16,
        bottom: 8,
        alignSelf: "flex-end"
      },
      android: {
        right: 6,
        bottom: 12,
        alignSelf: "flex-end"
      }
    })
  }
};
