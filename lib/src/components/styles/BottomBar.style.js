import { Platform } from "react-native";
import { isIPhoneXFamily } from "@freakycoder/react-native-helpers";

export default {
  container: {
    flex: 1,
    height: 80,
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: isIPhoneXFamily() ? 15 : -5
      },
      android: {
        bottom: 0
      }
    }),
    ...Platform.select({
      android: { elevation: 16 },
      ios: {
        shadowRadius: 16,
        shadowOpacity: 0.7,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 16
        }
      }
    })
  }
};
