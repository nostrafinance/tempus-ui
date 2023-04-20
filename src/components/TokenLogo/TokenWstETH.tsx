import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenWstETH: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-stETH"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z"
      fill="#00A3FF"
    />
    <path
      opacity="0.6"
      d="M22.5632 14.8633L22.7423 15.1381C24.7627 18.2374 24.3114 22.2964 21.6574 24.8968C20.0961 26.4267 18.0498 27.1917 16.0034 27.1918C16.0034 27.1918 16.0034 27.1918 22.5632 14.8633Z"
      fill="white"
    />
    <path
      opacity="0.2"
      d="M16.0024 18.6103L22.5622 14.8633C16.0025 27.1918 16.0024 27.1918 16.0024 27.1918C16.0024 24.5068 16.0024 21.43 16.0024 18.6103Z"
      fill="white"
    />
    <path
      d="M9.43676 14.8633L9.25763 15.1381C7.23726 18.2374 7.68851 22.2964 10.3425 24.8968C11.9038 26.4267 13.9501 27.1917 15.9965 27.1918C15.9965 27.1918 15.9965 27.1918 9.43676 14.8633Z"
      fill="white"
    />
    <path
      opacity="0.6"
      d="M15.9948 18.6103L9.43506 14.8633C15.9948 27.1918 15.9948 27.1918 15.9948 27.1918C15.9948 24.5068 15.9948 21.43 15.9948 18.6103Z"
      fill="white"
    />
    <path opacity="0.2" d="M16.0054 10.2397V16.7022L21.6559 13.4731L16.0054 10.2397Z" fill="white" />
    <path opacity="0.6" d="M16.0037 10.2397L10.3491 13.473L16.0037 16.7022V10.2397Z" fill="white" />
    <path d="M16.0037 4.80469L10.3491 13.4749L16.0037 10.2326V4.80469Z" fill="white" />
    <path opacity="0.6" d="M16.0054 10.2315L21.6602 13.4739L16.0054 4.79932V10.2315Z" fill="white" />
  </svg>
);

export default withLogo(TokenWstETH);
