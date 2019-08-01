import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { _shapeStyle, _shadowStyle } from "./styles/Shape.style";

class Shape extends Component {
  render() {
    const { shapeStyle, shapeColor, shapeShadowColor } = this.props;
    return (
      <View
        style={[
          _shapeStyle(shapeColor),
          _shadowStyle(shapeShadowColor),
          shapeStyle
        ]}
      />
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
