import { CSSProperties, FC, memo, PropsWithChildren } from 'react';

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

const typographyVariantMap = new Map<TypographyVariant, CSSProperties>();
typographyVariantMap.set('header', {
  fontStyle: 'normal',
  fontSize: '40px',
  lineHeight: '48px',
});
typographyVariantMap.set('subheader', {
  fontStyle: 'normal',
  fontSize: '32px',
  lineHeight: '40px',
});
typographyVariantMap.set('title', {
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '32px',
});
typographyVariantMap.set('subtitle', {
  fontStyle: 'normal',
  fontSize: '20px',
  lineHeight: '28px',
});
typographyVariantMap.set('body-primary', {
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '24px',
});
typographyVariantMap.set('body-secondary', {
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '16px',
});
typographyVariantMap.set('body-tertiary', {
  fontStyle: 'normal',
  fontSize: '10px',
  lineHeight: '16px',
});

const typographyColorMap = new Map<TypographyColor, string>();
typographyColorMap.set('text-primary', 'var(--textPrimary)');
typographyColorMap.set('text-secondary', 'var(--textSecondary)');
typographyColorMap.set('text-tertiary', 'var(--textTertiary)');
typographyColorMap.set('text-primary-inverted', 'var(--textPrimaryInverted)');
typographyColorMap.set('primary', 'var(--primary)');

const typographyWeightMap = new Map<TypographyWeight, number>();
typographyWeightMap.set('regular', 400);
typographyWeightMap.set('medium', 500);
typographyWeightMap.set('bold', 700);

const typographyTypeMap = new Map<TypographyType, string>();
typographyTypeMap.set('regular', 'sans-serif');
typographyTypeMap.set('mono', 'monospace');

export interface TypographyProps {
  variant: TypographyVariant;
  color?: TypographyColor;
  opacity?: number;
  weight?: TypographyWeight;
  type?: TypographyType;
  className?: string;
}

const Typography: FC<PropsWithChildren<TypographyProps>> = props => {
  const { variant, color, weight, opacity = 1, type, children, className } = props;

  let fontColor: string | undefined;
  if (color) {
    fontColor = typographyColorMap.get(color);
  } else {
    fontColor = typographyColorMap.get('text-primary');
  }

  let fontWeight: number | undefined;
  if (weight) {
    fontWeight = typographyWeightMap.get(weight);
  } else {
    fontWeight = typographyWeightMap.get('regular');
  }

  let fontFamily: string | undefined;
  if (type) {
    fontFamily = typographyTypeMap.get(type);
  } else {
    fontFamily = typographyTypeMap.get('regular');
  }

  return (
    <div
      className={className}
      style={{
        ...typographyVariantMap.get(variant),
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

export default memo(Typography);
