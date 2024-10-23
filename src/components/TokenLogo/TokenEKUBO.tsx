import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenEKUBO: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-NSTR"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#661CC4" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12.2309C5 10.4466 6.45376 9 8.2477 9H23.4033C25.1972 9 26.651 10.4466 26.651 12.2309V19.7691C26.651 21.5534 25.1972 23 23.4033 23H8.2477C6.45376 23 5 21.5534 5 19.7691V12.2309ZM15.8255 16C15.8255 18.3789 13.8869 20.3079 11.4954 20.3079C9.10388 20.3079 7.16534 18.3789 7.16534 16C7.16534 13.6211 9.10328 11.6921 11.4954 11.6921C13.8869 11.6921 15.8255 13.6211 15.8255 16ZM15.8255 16C15.8255 13.6211 17.764 11.6921 20.1556 11.6921C22.5471 11.6921 24.4856 13.6211 24.4856 16C24.4856 18.3789 22.5477 20.3079 20.1556 20.3079C17.764 20.3079 15.8255 18.3789 15.8255 16Z"
      fill="#F1F0FA"
    />
  </svg>
);

export default withLogo(TokenEKUBO);
