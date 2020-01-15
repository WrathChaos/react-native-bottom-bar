import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import colors from "../styles/colors";
import styles from "./MiniButton.style";
import { shadowStyle } from "../styles/shared.style";

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
            size={40}
            name="help-circle"
            type="MaterialCommunityIcons"
            color={color || colors.theme.light.primary}
            shadowStyle={shadowStyle.buttonStyle}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
