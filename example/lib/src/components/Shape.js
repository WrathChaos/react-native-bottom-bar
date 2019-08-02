import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Platform } from "react-native";
import { _shapeStyle, _shadowStyle } from "./styles/Shape.style";
import Androw from "react-native-androw";

class Shape extends Component {
  render() {
    const { shapeStyle, shapeColor, shapeShadowColor } = this.props;
    return (
      <Androw style={_shadowStyle(shapeShadowColor)}>
        <View
          style={[
            _shapeStyle(shapeColor),
            shapeStyle
          ]}
        />
      </Androw>
    );
  }
}

Shape.propTypes = {
  shapeColor: PropTypes.string,
  shapeShadowColor: PropTypes.string
};

Shape.defaultProps = {
  shapeColor: "#FBFBFD",
  shapeShadowColor: "#757575"
};

export default Shape;
