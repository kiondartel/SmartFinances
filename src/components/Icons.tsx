import React from 'react';
import ArrowLeft from '../assets/Icons/ArrowLeft';
import ArrowRight from '../assets/Icons/ArrowRight';
export type SourceProp = {
  height: number;
  width: number;
  primary: string;
};
const ICON_MAP = {
  Arrowright: ArrowRight,
  Arrowleft: ArrowLeft,
};
export type IconSource = keyof typeof ICON_MAP;
type IconProp = {source: IconSource} & SourceProp;

const Icon = ({source, height, width, primary}: IconProp) => {
  const Source = ICON_MAP[source];

  return <Source height={height} width={width} primary={primary} />;
};

export default Icon;
