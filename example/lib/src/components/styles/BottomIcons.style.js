import { Dimensions, Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import colors from "./common/colors";

export default {
  iconContainer: {
    ...Platform.select({
      ios: {
        position: "absolute",
        width: Dimensions.get("window").width,
        ...ifIphoneX(
          {
            top: 10
          },
          {
            top: 9
          }
        )
      },
      android: {
        position: "absolute",
        width: Dimensions.get("window").width,
        bottom: 10,
        marginBottom: 20,
        flex: 1,
        justifyContent: "space-between"
      }
    })
  },
  iconStyles: {
    main: {
      top: 20,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
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
    },
    mainIconStyle: {
      container: {
        ...Platform.select({
          ios: {
            alignItems: "center",
            justifyContent: "center",
            bottom: 15
          },
          android: {
            alignItems: "center",
            justifyContent: "center",
            bottom: 5
          }
        })
      },
      button: {
        ...Platform.select({
          ios: {
            position: "absolute",
            height: 70,
            width: 70,
            borderRadius: 35,
            shadowColor: colors.theme.light.shadowColor,
            shadowOffset: { width: 2, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 1
          },
          android: {
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.theme.light.primary,
            height: 70,
            width: 70,
            borderRadius: 35
          }
        })
      }
    }
  }
};
