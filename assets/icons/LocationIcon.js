import * as React from "react";
import Svg, { Path } from "react-native-svg";

// Used this icon's because the ones in the project were not rendering properly

function LocationIcon(props) {
  return (
    <Svg
      width="10"
      height="15"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.5 0C1.565 0 0 1.565 0 3.5C0 6.125 3.5 10 3.5 10C3.5 10 7 6.125 7 3.5C7 1.565 5.435 0 3.5 0ZM3.5 4.75C2.81 4.75 2.25 4.19 2.25 3.5C2.25 2.81 2.81 2.25 3.5 2.25C4.19 2.25 4.75 2.81 4.75 3.5C4.75 4.19 4.19 4.75 3.5 4.75Z"
        fill="white"
      />
    </Svg>
  );
}

export default LocationIcon;