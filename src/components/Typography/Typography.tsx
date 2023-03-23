import { CSSProperties, PropsWithChildren } from 'react';

export type TypographyVariant =
  | 'header'
  | 'subheader'
  | 'title'
  | 'subtitle'
  | 'body-primary'
  | 'body-secondary'
  | 'body-tertiary';
export type TypographyColor = 'text-primary' | 'text-secondary' | 'text-tertiary' | 'text-primary-inverted' | 'primary';
export type TypographyWeight = 'regular' | 'medium' | 'bold';
export type TypographyType = 'regular' | 'mono';

export type TypographyVariantMap = { [k in string]: CSSProperties };
export type TypographyColorMap = { [k in string]: string };
export type TypographyWeightMap = { [k in string]: number };
export type TypographyTypeMap = { [k in string]: string };

const DEFAULT_VARIANTS: TypographyVariantMap = {
  header: {
    fontStyle: 'normal',
    fontSize: '40px',
    lineHeight: '48px',
  },
  subheader: {
    fontStyle: 'normal',
    fontSize: '32px',
    lineHeight: '40px',
  },
  title: {
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '32px',
  },
  subtitle: {
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
  },
  'body-primary': {
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
  },
  'body-secondary': {
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
  },
  'body-tertiary': {
    fontStyle: 'normal',
    fontSize: '10px',
    lineHeight: '16px',
  },
};

const DEFAULT_COLORS: TypographyColorMap = {
  'text-primary': 'var(--textPrimary)',
  'text-secondary': 'var(--textSecondary)',
  'text-tertiary': 'var(--textTertiary)',
  'text-primary-inverted': 'var(--textPrimaryInverted)',
  primary: 'var(--primary)',
};

const DEFAULT_WEIGHTS: TypographyWeightMap = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const DEFAULT_TYPES: TypographyTypeMap = {
  regular: 'sans-serif',
  mono: 'monospace',
};

export interface TypographyBaseProps<V extends string, C extends string, W extends string, T extends string>
  extends PropsWithChildren<{}> {
  variant: V;
  color?: C;
  opacity?: number;
  weight?: W;
  type?: T;
  className?: string;
}

export interface TypographyProps<V extends string, C extends string, W extends string, T extends string>
  extends TypographyBaseProps<V, C, W, T> {
  variantMap?: TypographyVariantMap;
  colorMap?: TypographyColorMap;
  weightMap?: TypographyWeightMap;
  typeMap?: TypographyTypeMap;
  defaultColor?: C;
  defaultWeight?: W;
  defaultType?: T;
}

const Typography = <
  V extends string = TypographyVariant,
  C extends string = TypographyColor,
  W extends string = TypographyWeight,
  T extends string = TypographyType,
>(
  props: TypographyProps<V, C, W, T>,
) => {
  const {
    variant,
    color,
    weight,
    opacity = 1,
    type,
    children,
    className,
    variantMap = DEFAULT_VARIANTS,
    colorMap = DEFAULT_COLORS,
    weightMap = DEFAULT_WEIGHTS,
    typeMap = DEFAULT_TYPES,
    defaultColor = 'text-primary',
    defaultWeight = 'regular',
    defaultType = 'regular',
  } = props;

  const fontVariant = variantMap[variant];
  const fontColor = colorMap[color ?? defaultColor];
  const fontWeight = weightMap[weight ?? defaultWeight];
  const fontFamily = typeMap[type ?? defaultType];

  return (
    <div
      className={className}
      style={{
        ...fontVariant,
        color: fontColor,
        fontWeight,
        fontFamily,
        opacity,
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
