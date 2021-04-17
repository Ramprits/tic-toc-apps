import React, { ReactNode, memo } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import constant from "@config/constant";

type TextProps = {
  children: ReactNode;
  weight?: "400" | "700";
} & NativeTextProps;

const Text = ({ children, style, weight, ...props }: TextProps) => {
  let fontFamily;
  if (weight === "400") {
    fontFamily = constant.DeliusUnicase_400Regular;
  }
  if (weight === "700") {
    fontFamily = constant.DeliusUnicase_700Bold;
  }
  return (
    <NativeText
      {...props}
      style={[{ fontFamily: fontFamily || "DeliusUnicase_400Regular" }]}
    >
      {children}
    </NativeText>
  );
};

export default memo(Text);
