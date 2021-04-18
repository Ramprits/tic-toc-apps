import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./gradient.styles";
type GradientBackgroundProps = {
  children: ReactNode;
};
const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "transparent"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
