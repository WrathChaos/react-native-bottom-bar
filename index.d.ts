import {Component, ReactChild} from "react";
import { StyleProp, ViewStyle } from "react-native";

interface IProps {
    style: StyleProp<ViewStyle>;
    shapeStyle: StyleProp<ViewStyle>;
    shapeColor: string;
    mainIcon: React.ReactNode;
    mainIconColor: string;
    mainIconGradient: string[];
    mainIconComponent: React.ReactNode;
    miniButtonsColor: string;
    firstIconComponent: React.ReactNode;
    secondIconComponent: React.ReactNode;
    thirdIconComponent: React.ReactNode;
    fourthIconComponent: React.ReactNode;
}

declare class BottomBar extends Component<IProps> {
	constructor(props:IProps);
}

export default BottomBar;