import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenETH: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-ETH"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      fill="#627EEA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49902 16.2225L15.997 4V12.8718L8.49902 16.2225ZM15.997 21.9708V28L8.49902 17.6189L15.997 21.9708Z"
      fill="white"
    />
    <path d="M15.999 20.5766L23.496 16.2227L15.999 12.874V20.5766Z" fill="white" fillOpacity="0.2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.999 4V12.8718L23.496 16.2225L15.999 4ZM15.999 21.9695V27.9977L23.501 17.6166L15.999 21.9695ZM15.997 20.5764L8.49902 16.2225L15.997 12.8738V20.5764Z"
      fill="white"
      fillOpacity="0.6"
    />
  </svg>
);

export default withLogo(TokenETH);
