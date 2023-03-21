export default interface IconProps {
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'tiny' | number;
  color?: string;
}

export interface InnerIconProps extends Required<IconProps> {}
