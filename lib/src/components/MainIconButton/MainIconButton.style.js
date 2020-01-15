import { Platform } from "react-native";
import colors from "../styles/colors";

export default {
  mainIconStyle: {
    container: {
      ...Platform.select({
        ios: {
          bottom: 15,
          alignItems: "center",
          justifyContent: "center"
        },
        android: {
          bottom: 5,
          alignItems: "center",
          justifyContent: "center"
        }
      })
    },
    button: {
      ...Platform.select({
        ios: {
          width: 70,
          height: 70,
          borderRadius: 35,
          position: "absolute",
          shadowColor: colors.theme.light.shadowColor,
          shadowOffset: { width: 2, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 3
        },
        android: {
          width: 70,
          height: 70,
          borderRadius: 35,
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.theme.light.primary
        }
      })
    }
  },
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 15 : 0
  }
};
