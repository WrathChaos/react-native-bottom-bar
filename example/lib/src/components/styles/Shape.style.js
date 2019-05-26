import { Dimensions } from "react-native";
import colors from "./common/colors";

const { width } = Dimensions.get("window");

export default {
  shape: {
    main: {
      width,
      height: width,
      borderRadius: width / 2,
      alignSelf: "center",
      alignContent: "center",
      transform: [{ scaleX: 2 }, { scaleY: 0.5 }]
    },
    customShadowStyle: {
      shadowColor: colors.theme.light.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3
    }
  }
};
