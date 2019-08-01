import React from "react";
import {
  View,
  Linking,
  Platform,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
// Other Components
import { ShowcaseScreen } from "./src/components/ShowcaseScreen";
// import BottomBar from "react-native-bottom-bar";
import BottomBar from "./lib/src/components/BottomBar";

const mainColor = "#373f4c";
const url = "www.freakycoder.com";
const pinkGradient = ["#ee9ca7", "#ffdde1"];
const pinkDarkGradient = ["#654ea3", "#eaafc8"];
const pinkyGradient = ["#DA4453", "#89216B"];
const pnkGradient = ["#bc4e9c", "#f80759"];

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.mainIconOnPress = this.mainIconOnPress.bind(this);
  }

  mainIconOnPress() {
    // Magic happens for main icon on press
    console.log("mainIconOnPress");
  }

  openURL() {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  renderMainIcon() {
    return (
      <Icon name="play" type="MaterialCommunityIcons" size={40} color="white" />
    );
  }

  renderFirstIconComponent() {
    return (
      <View
        style={{
          ...Platform.select({
            ios: {
              right: 16
            },
            android: {
              right: 8,
              top: 8
            }
          })
        }}
      >
        <Icon
          name="ios-megaphone"
          type="Ionicons"
          size={40}
          color={mainColor}
        />
      </View>
    );
  }

  renderSecondIconComponent() {
    return (
      <View
        style={{
          ...Platform.select({
            ios: {
              right: 24,
              bottom: 3
            },
            android: {
              top: 3
            }
          })
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.openURL();
          }}
        >
          <Icon
            name="medium"
            type="MaterialCommunityIcons"
            size={40}
            color={mainColor}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderThirdIconComponent() {
    return (
      <View
        style={{
          ...Platform.select({
            ios: {
              left: 24,
              bottom: 3
            },
            android: {
              top: 3,
              left: 3
            }
          })
        }}
      >
        <Icon
          name="account"
          type="MaterialCommunityIcons"
          size={45}
          color={mainColor}
        />
      </View>
    );
  }

  renderFourthIconComponent() {
    return (
      <View
        style={{
          ...Platform.select({
            ios: {
              left: 16
            },
            android: {
              left: 8,
              top: 8
            }
          })
        }}
      >
        <Icon name="ios-settings" type="Ionicons" size={40} color={mainColor} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ShowcaseScreen />
          <BottomBar
            shapeColor="#fbfbfb"
            miniButtonsColor="#f04913"
            mainIconGradient={pnkGradient}
            mainIcon={this.renderMainIcon()}
            mainIconOnPress={this.mainIconOnPress}
            firstIconComponent={this.renderFirstIconComponent()}
            secondIconComponent={this.renderSecondIconComponent()}
            thirdIconComponent={this.renderThirdIconComponent()}
            fourthIconComponent={this.renderFourthIconComponent()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
