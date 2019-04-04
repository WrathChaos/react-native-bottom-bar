import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
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
