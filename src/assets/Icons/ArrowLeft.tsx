import Svg, {Path} from 'react-native-svg';
import {SourceProp} from '../../components/Icons';
import React from 'react';

const ArrowLeft = ({height, width, primary}: SourceProp) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12.2305 23.4219L12.5859 23.0664C12.8398 22.8125 12.8398 22.457 12.5859 22.2031L3.54688 13.1133H22.6406C22.9453 13.1133 23.25 12.8594 23.25 12.5039V11.9961C23.25 11.6914 22.9453 11.3867 22.6406 11.3867H3.54688L12.5859 2.34766C12.8398 2.09375 12.8398 1.73828 12.5859 1.48438L12.2305 1.12891C11.9766 0.875 11.6211 0.875 11.3672 1.12891L0.652344 11.8438C0.398438 12.0977 0.398438 12.4531 0.652344 12.707L11.3672 23.4219C11.6211 23.6758 11.9766 23.6758 12.2305 23.4219Z"
      fill={primary}
    />
  </Svg>
);

export default ArrowLeft;
