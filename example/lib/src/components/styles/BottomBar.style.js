import { ifIphoneX } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export default {
  container: {
    flex: 1,
    position: "absolute",
    height: 80,
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            bottom: 15
          },
          {
            bottom: -5
          }
        )
      },
      android: {
        bottom: 0
      }
    }),
    ...Platform.select({
      android: { elevation: 16 },
      ios: {
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 16
        },
        shadowOpacity: 0.7,
        shadowRadius: 16
      }
    })
  }
};
