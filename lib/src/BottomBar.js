import React, { Component } from "react";
import { View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./BottomBar.style";
import Shape from "./components/Shape/Shape";
import BottomIcons from "./components/BottomIcons/BottomIcons";

export default class BottomBar extends Component {
  renderTabBar = () => {
    const {
      style,
      shapeColor,
      shapeStyle,
      mainIcon,
      mainIconColor,
      mainIconGradient,
      mainIconOnPress,
      mainIconComponent,
      miniButtonsColor,
      firstIconComponent,
      secondIconComponent,
      thirdIconComponent,
      fourthIconComponent
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        <Shape shapeStyle={shapeStyle} shapeColor={shapeColor} />
        <BottomIcons
          mainIcon={mainIcon}
          mainIconColor={mainIconColor}
          mainIconGradient={mainIconGradient}
          mainIconOnPress={mainIconOnPress}
          mainIconComponent={mainIconComponent}
          miniButtonsColor={miniButtonsColor}
          firstIconComponent={firstIconComponent}
          secondIconComponent={secondIconComponent}
          thirdIconComponent={thirdIconComponent}
          fourthIconComponent={fourthIconComponent}
          {...this.props}
        />
      </View>
    );
  };

  render() {
    return this.renderTabBar();
  }
}
