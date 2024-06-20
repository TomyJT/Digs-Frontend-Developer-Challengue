import * as React from "react";
import Svg, { Path } from "react-native-svg";

// Used this icon's because the ones in the project were not rendering properly

function CheckIcon(props) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99999 15.2C11.9764 15.2 15.2 11.9764 15.2 7.99999C15.2 4.02354 11.9764 0.799988 7.99999 0.799988C4.02354 0.799988 0.799988 4.02354 0.799988 7.99999C0.799988 11.9764 4.02354 15.2 7.99999 15.2ZM11.3364 6.83638C11.6879 6.48491 11.6879 5.91506 11.3364 5.56359C10.9849 5.21212 10.4151 5.21212 10.0636 5.56359L7.09999 8.52719L5.93638 7.36359C5.58491 7.01212 5.01506 7.01212 4.66359 7.36359C4.31212 7.71506 4.31212 8.28491 4.66359 8.63638L6.46359 10.4364C6.81506 10.7879 7.38491 10.7879 7.73638 10.4364L11.3364 6.83638Z"
        fill="#00B47D"
      />
    </Svg>
  );
}

export default CheckIcon;
