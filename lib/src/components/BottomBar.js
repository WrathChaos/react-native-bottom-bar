import React, { Component } from "react";
import { View } from "react-native";
// Other Components
import Shape from "./Shape";
import BottomIcons from "./BottomIcons";
// Styles
import styles from "./styles/BottomBar.style";

export default class BottomBar extends Component {
  renderTabBar = () => {
    const {
      style,
      shapeColor,
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
        <Shape shapeColor={shapeColor} />
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
        />
      </View>
    );
  };

  render() {
    return this.renderTabBar();
  }
}
