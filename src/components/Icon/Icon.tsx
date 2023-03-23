import { FC } from 'react';
import { IconProps } from './IconProps';
import Twitter from './Twitter';

export type IconVariant = 'twitter';
export type IconMap = { [k in string]: FC<IconProps> };

const DEFAULT_ICONS: IconMap = {
  twitter: Twitter,
};

export interface IconGenericProps<T extends string> extends IconProps {
  variant: T;
  iconMap?: IconMap;
}

const Icon = <T extends string = IconVariant>(props: IconGenericProps<T>) => {
  const { variant, iconMap = DEFAULT_ICONS, ...iconProps } = props;

  const IconComponent = iconMap[variant];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...iconProps} />;
};

export default Icon;
