import { FC, memo } from 'react';
import IconProps from './IconProps';
import Twitter from './Twitter';

export type IconVariant = 'twitter' | 'favorite';

const Icon: FC<IconProps & { variant: IconVariant }> = props => {
  switch (props.variant) {
    case 'twitter':
      return <Twitter {...props} />;
    default:
      return null;
  }
};

export default memo(Icon);
