import { Platform } from "react-native";
import colors from "../styles/colors";
import {
  isIPhoneXFamily,
  ScreenWidth
} from "@freakycoder/react-native-helpers";

export default {
  iconContainer: {
    ...Platform.select({
      ios: {
        position: "absolute",
        width: ScreenWidth,
        top: isIPhoneXFamily() ? 10 : 9
      },
      android: {
        flex: 1,
        bottom: 10,
        marginBottom: 20,
        width: ScreenWidth,
        position: "absolute",
        justifyContent: "space-between"
      }
    })
  },
  iconStyles: {
    main: {
      top: 20,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    firstIconStyle: {
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
    },
    secondIconStyle: {
      ...Platform.select({
        ios: {
          right: 26,
          bottom: 8,
          alignSelf: "flex-end"
        },
        android: {
          right: 0,
          bottom: 12,
          alignSelf: "flex-end"
        }
      })
    },
    thirdIconStyle: {
      ...Platform.select({
        ios: {
          left: 26,
          bottom: 8,
          alignSelf: "flex-end"
        },
        android: {
          left: 0,
          bottom: 8,
          alignSelf: "flex-end"
        }
      })
    },
    fourthIconStyle: {
      ...Platform.select({
        ios: {
          left: 16,
          bottom: 5,
          alignSelf: "flex-end"
        },
        android: {
          left: 4,
          bottom: 12,
          alignSelf: "flex-end"
        }
      })
    }
  }
};
