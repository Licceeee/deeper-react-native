import * as React from "react";
import Svg, { Defs, Path, Use, G } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="289.469 -0.217 34 196.766"
      width={20}
      height={118}
      {...props}
    >
      <Defs>
        <Path d="M306 180.78V.78" id="prefix__a" />
        <Path
          d="M314.8 83.78a9 9 0 01-18 0c0-4.96 4.03-9 9-9s9 4.04 9 9z"
          id="prefix__b"
        />
        <Path
          d="M292.47 175.79h26.89l-13.69 17.76-13.2-17.76z"
          id="prefix__c"
        />
        <Path d="M290.47 164.25h30L305.8 181l-15.33-16.75z" id="prefix__d" />
      </Defs>
      <Use xlinkHref="#prefix__a" fillOpacity={0} stroke="#151b29" />
      <Use xlinkHref="#prefix__b" fill="#151b29" />
      <Use xlinkHref="#prefix__b" fillOpacity={0} stroke="#000" />
      <Use xlinkHref="#prefix__c" fillOpacity={0} stroke="#000" />
      <G>
        <Use xlinkHref="#prefix__d" fillOpacity={0} stroke="#000" />
      </G>
    </Svg>
  );
}
