import React, { Component } from "react";
import { Platform, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-dynamic-vector-icons";
import colors from "./styles/common/colors";
import { defaultShadowStyle } from "./styles/common/shared.style";
import BottomIconsStyle from "./styles/BottomIcons.style";

const styles = {
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
const blueGradient = ["rgba(156, 180, 249, 1.0)", "rgba(108, 136, 246, 1.0)"];

export default class MainIconButton extends Component {
  render() {
    const {
      mainIcon,
      mainIconName,
      mainIconSize,
      mainIconType,
      mainIconColor,
      mainIconOnPress,
      mainIconGradient
    } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={mainIconOnPress}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={mainIconGradient || blueGradient}
          style={[
            BottomIconsStyle.iconStyles.mainIconStyle.button,
            defaultShadowStyle
          ]}
        >
          <View style={[styles.iconContainer, defaultShadowStyle]}>
            {mainIcon || (
              <Icon
                size={mainIconSize || 35}
                name={mainIconName || "ios-car"}
                type={mainIconType || "Ionicon"}
                color={mainIconColor || colors.theme.light.white}
              />
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
