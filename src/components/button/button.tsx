import React, { ReactElement, ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../text/text";
import styles from "./button.styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;
const Button = ({ title, ...props }: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
