import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const NetworkBase: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-network-base"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
      fill="#0052FF"
    />
    <path
      d="M10.0444 16.9491C13.9203 16.9491 17.0623 13.8125 17.0623 9.94339C17.0623 6.07428 13.9203 2.93774 10.0444 2.93774C6.36726 2.93774 3.35063 5.76096 3.05103 9.35451H12.327V10.5323H3.05103C3.35063 14.1258 6.36726 16.9491 10.0444 16.9491Z"
      fill="white"
    />
  </svg>
);

export default withLogo(NetworkBase);
