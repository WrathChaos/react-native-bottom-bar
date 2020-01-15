import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import colors from "../styles/colors";
import styles from "./MainIconButton.style";
import { defaultShadowStyle } from "../styles/shared.style";

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
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 1 }}
          colors={mainIconGradient || blueGradient}
          style={[styles.mainIconStyle.button, defaultShadowStyle]}
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
