import { Dimensions, Platform } from "react-native";
const { width } = Dimensions.get("window");

export function _shapeStyle(backgroundColor) {
  return {
    width,
    height: width,
    backgroundColor,
    alignSelf: "center",
    borderRadius: width / 2,
    alignContent: "center",
    transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
    ...Platform.select({
      ios: {
        bottom: 79
      },
      android: {
        bottom: 99
      }
    })
  };
}

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios:{
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowColor: shadowColor,
        shadowOffset: { width: 0, height: 2 }
      },
      android:{
        shadowColor: shadowColor,
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 50
      }
    })
   
  };
}



