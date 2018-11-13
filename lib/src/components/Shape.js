import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles/Shape.style";
import colors from "./styles/common/colors";

export default class Shape extends Component {
  render() {
    return (
      <View
        style={[
          styles.shape.main,
          styles.shape.customShadowStyle,
          {
            backgroundColor:
              this.props.shapeColor || colors.theme.light.primaryBackground
          }
        ]}
      />
    );
  }
}
