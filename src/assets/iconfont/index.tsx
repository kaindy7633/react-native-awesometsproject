/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShoucang from './IconShoucang';
import IconWode from './IconWode';
import IconFaxian from './IconFaxian';
import IconHome from './IconHome';
export { default as IconShoucang } from './IconShoucang';
export { default as IconWode } from './IconWode';
export { default as IconFaxian } from './IconFaxian';
export { default as IconHome } from './IconHome';

export type IconNames = 'icon-shoucang' | 'icon-wode' | 'icon-faxian' | 'icon-home';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-shoucang':
      return <IconShoucang key="1" {...rest} />;
    case 'icon-wode':
      return <IconWode key="2" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="3" {...rest} />;
    case 'icon-home':
      return <IconHome key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
