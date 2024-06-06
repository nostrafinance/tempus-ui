import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenNSTR: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-NSTR"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#0E1A33" />
    <path
      d="M6 18.424L14.066 13.8706L6 9.31714V18.424ZM16.0744 15.0034L6 20.6921L16.0744 26.3783L26.1487 20.6921V9.31714L16.0744 15.0058V15.0034ZM15.9462 7.37585L11.3262 10.0592L16.0744 12.7402L20.82 10.0592L15.9487 7.37831L15.9462 7.37585Z"
      fill="#FF4240"
    />
  </svg>
);

export default withLogo(TokenNSTR);
