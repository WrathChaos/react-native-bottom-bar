import React, { Component } from "react";
import { Platform, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { Icon } from "react-native-elements";
import colors from "./styles/common/colors";
import sharedStyle, { defaultShadowStyle } from "./styles/common/shared.style";
import BottomIconsStyle from "./styles/BottomIcons.style";

const styles = {
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    marginTop: Platform.OS === "ios" ? 15 : 0
  }
};
const blueGradient = ["rgba(156, 180, 249, 1.0)", "rgba(108, 136, 246, 1.0)"];

export default class MainIconButton extends Component {
  render() {
    const {
      mainIcon,
      mainIconColor,
      mainIconGradient,
      mainIconOnPress
    } = this.props;
    return (
      <TouchableOpacity style={[styles.container]} onPress={() => {}}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={mainIconGradient || blueGradient}
          style={[
            BottomIconsStyle.iconStyles.mainIconStyle.button,
            defaultShadowStyle
          ]}
        >
          <View
            style={[
              styles.iconContainer,
              sharedStyle.center,
              defaultShadowStyle
            ]}
          >
            {mainIcon || (
              <Icon
                name="ios-car"
                type="ionicon"
                size={35}
                color={mainIconColor || colors.theme.light.white}
              />
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
