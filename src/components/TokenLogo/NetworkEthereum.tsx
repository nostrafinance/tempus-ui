import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const NetworkEthereum: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-network-ethereum"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
      fill="#627EEA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.31177 10.1391L9.99802 2.5V8.04489L5.31177 10.1391ZM9.99802 13.7317V17.5L5.31177 11.0118L9.99802 13.7317Z"
      fill="white"
    />
    <path d="M9.99927 12.8603L14.6849 10.1391L9.99927 8.04614V12.8603Z" fill="white" fillOpacity="0.2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99927 2.5V8.04489L14.6849 10.1391L9.99927 2.5ZM9.99927 13.7309V17.4986L14.688 11.0104L9.99927 13.7309ZM9.99802 12.8603L5.31177 10.1391L9.99802 8.04615V12.8603Z"
      fill="white"
      fillOpacity="0.6"
    />
  </svg>
);

export default withLogo(NetworkEthereum);
