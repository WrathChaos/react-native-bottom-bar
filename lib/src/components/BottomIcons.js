import React, { Component } from "react";
import { View } from "react-native";
// Components
import styles from "./styles/BottomIcons.style";
import MiniButton from "./MiniButton";
import MainIconButton from "./MainIconButton";

export default class BottomIcons extends Component {
  render() {
    const {
      mainIcon,
      mainIconColor,
      mainIconGradient,
      mainIconComponent,
      miniButtonsColor,
      firstIconComponent,
      secondIconComponent,
      thirdIconComponent,
      fourthIconComponent
    } = this.props;

    return (
      <View style={[styles.iconContainer]}>
        <View style={styles.iconStyles.main}>
          {firstIconComponent || (
            <MiniButton
              style={styles.iconStyles.firstIconStyle}
              color={miniButtonsColor}
            />
          )}
          {secondIconComponent || (
            <MiniButton
              style={styles.iconStyles.secondIconStyle}
              color={miniButtonsColor}
            />
          )}
          <View style={[styles.iconStyles.mainIconStyle.container]}>
            {mainIconComponent || (
              <MainIconButton
                mainIcon={mainIcon}
                mainIconColor={mainIconColor}
                mainIconGradient={mainIconGradient}
              />
            )}
          </View>
          {thirdIconComponent || (
            <MiniButton
              style={styles.iconStyles.thirdIconStyle}
              color={miniButtonsColor}
            />
          )}
          {fourthIconComponent || (
            <MiniButton
              style={styles.iconStyles.fourthIconStyle}
              color={miniButtonsColor}
            />
          )}
        </View>
      </View>
    );
  }
}
