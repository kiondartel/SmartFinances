import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SourceProp} from '../../components/Icons';

const ArrowRight = ({height, width, primary}: SourceProp) => (
  <Svg width={height} height={width} viewBox="0 0 13 13" fill="none">
    <Path
      d="M5.90625 0.761719L5.71484 0.953125C5.57812 1.08984 5.57812 1.28125 5.71484 1.41797L10.582 6.28516H0.328125C0.136719 6.28516 0 6.44922 0 6.61328V6.88672C0 7.07812 0.136719 7.21484 0.328125 7.21484H10.582L5.71484 12.1094C5.57812 12.2461 5.57812 12.4375 5.71484 12.5742L5.90625 12.7656C6.04297 12.9023 6.23438 12.9023 6.37109 12.7656L12.1406 6.99609C12.2773 6.85938 12.2773 6.66797 12.1406 6.53125L6.37109 0.761719C6.23438 0.625 6.04297 0.625 5.90625 0.761719Z"
      fill={primary}
    />
  </Svg>
);

export default ArrowRight;
