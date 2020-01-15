import React, { Component } from "react";
import { View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./BottomIcons.style";
import MiniButton from "../MiniButton/MiniButton";
import MainIconButtonStyle from "../MainIconButton/MainIconButton.style";
import MainIconButton from "../MainIconButton/MainIconButton";

export default class BottomIcons extends Component {
  render() {
    const {
      mainIcon,
      mainIconColor,
      mainIconOnPress,
      mainIconGradient,
      disableFourthIcon,
      miniButtonsColor,
      disableFirstIcon,
      disableThirdIcon,
      disableSecondIcon,
      mainIconComponent,
      firstIconComponent,
      thirdIconComponent,
      fourthIconComponent,
      secondIconComponent
    } = this.props;

    return (
      <View style={[styles.iconContainer]}>
        <View style={styles.iconStyles.main}>
          {!disableFirstIcon &&
            (firstIconComponent || (
              <MiniButton
                style={styles.iconStyles.firstIconStyle}
                color={miniButtonsColor}
              />
            ))}
          {!disableSecondIcon &&
            (secondIconComponent || (
              <MiniButton
                style={styles.iconStyles.secondIconStyle}
                color={miniButtonsColor}
              />
            ))}
          <View style={[MainIconButtonStyle.mainIconStyle.container]}>
            {mainIconComponent || (
              <MainIconButton
                mainIcon={mainIcon}
                mainIconColor={mainIconColor}
                mainIconGradient={mainIconGradient}
                mainIconOnPress={mainIconOnPress}
              />
            )}
          </View>
          {!disableThirdIcon &&
            (thirdIconComponent || (
              <MiniButton
                style={styles.iconStyles.thirdIconStyle}
                color={miniButtonsColor}
              />
            ))}
          {!disableFourthIcon &&
            (fourthIconComponent || (
              <MiniButton
                style={styles.iconStyles.fourthIconStyle}
                color={miniButtonsColor}
              />
            ))}
        </View>
      </View>
    );
  }
}

BottomIcons.defaultProps = {
  disableFirstIcon: false,
  disableSecondIcon: false,
  disableThirdIcon: false,
  disableFourthIcon: false
};
