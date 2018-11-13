import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles/MiniButton.style";
import colors from "./styles/common/colors";
import { shadowStyle } from "./styles/common/shared.style";

export default class MiniButton extends Component {
  render() {
    const { style, color } = this.props;

    return (
      <TouchableOpacity
        style={style || styles.miniIconStyle}
        onPress={() => {}}
      >
        <View>
          <Icon
            name="help-circle"
            type="material-community"
            size={40}
            color={color || colors.theme.light.primary}
            shadowStyle={shadowStyle.buttonStyle}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
