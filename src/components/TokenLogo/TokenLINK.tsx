import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenLINK: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-LINK"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="white" />
    <path
      d="M16 3.5L5 9.75V22.25L16 28.5L27 22.25V9.75L16 3.5ZM22.3398 19.601L16.002 23.202L9.66419 19.601V12.399L16.002 8.798L22.3398 12.399V19.601Z"
      fill="#0847F7"
    />
  </svg>
);

export default withLogo(TokenLINK);
