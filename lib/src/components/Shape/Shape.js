import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Androw from "react-native-androw";
/**
 * ? Local Imports
 */
import { _shapeStyle, _shadowStyle } from "./Shape.style";

class Shape extends Component {
  render() {
    const { shapeStyle, shapeColor, shapeShadowColor } = this.props;
    return (
      <Androw style={_shadowStyle(shapeShadowColor)}>
        <View style={[_shapeStyle(shapeColor), shapeStyle]} />
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
