import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  View
} from "react-native";
import { Icon } from "react-native-elements";
// Other Components
import { ShowcaseScreen } from "./src/components/ShowcaseScreen";
import BottomBar from "react-native-bottom-bar"; // Do not forget to make it "react-native-bottom-bar"

const mainColor = "#373f4c";
const url = "www.freakycoder.com";
const pinkGradient = ["#ee9ca7", "#ffdde1"];
const pinkDarkGradient = ["#654ea3", "#eaafc8"];
const pinkyGradient = ["#DA4453", "#89216B"];
const pnkGradient = ["#bc4e9c", "#f80759"];

console.disableYellowBox = true;

export default class App extends React.Component {
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
      <Icon name="play" type="material-community" size={40} color="white" />
    );
  }

  renderFirstIconComponent() {
    return (
      <View style={{ right: 16 }}>
        <Icon name="ios-megaphone" type="ionicon" size={40} color={mainColor} />
      </View>
    );
  }

  renderSecondIconComponent() {
    return (
      <View style={{ right: 24, bottom: 3 }}>
        <TouchableOpacity
          onPress={() => {
            this.openURL();
          }}
        >
          <Icon
            name="medium"
            type="material-community"
            size={40}
            color={mainColor}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderThirdIconComponent() {
    return (
      <View style={{ left: 24, bottom: 3 }}>
        <Icon
          name="account"
          type="material-community"
          size={45}
          color={mainColor}
        />
      </View>
    );
  }

  renderFourthIconComponent() {
    return (
      <View style={{ left: 16 }}>
        <Icon name="ios-settings" type="ionicon" size={40} color={mainColor} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ShowcaseScreen />
          <BottomBar
            shapeColor="#fcfcfc"
            miniButtonsColor="#f04913"
            mainIcon={this.renderMainIcon()}
            mainIconGradient={pnkGradient}
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
  },
  homeContainer: {
    alignItems: "center"
  },
  welcome: {
    color: "rgba(255, 255, 255, .85)",
    marginBottom: 45,
    fontSize: 30,
    textAlign: "center"
  },
  registration: {
    color: "rgba(0, 0, 0, .5)",
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "center"
  }
});
