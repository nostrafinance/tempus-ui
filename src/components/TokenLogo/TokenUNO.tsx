import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenUNO: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-UNO"
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2551_18397)">
      <path
        d="M28 0C43.4654 0 56 12.5371 56 28C56 43.4654 43.4654 56 28 56C12.5371 56 0 43.4641 0 28C0 12.5371 12.5371 0 28 0Z"
        fill="#0C66E4"
      />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.875 32.375H13.125V28H42.875V32.375Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.875 25.375H13.125V21H42.875V25.375Z" fill="white" />
      <path
        d="M27.9617 43.75C24.2339 43.75 21.4125 42.6888 19.4975 40.5664C17.5825 38.4441 16.625 35.4011 16.625 31.4377V15.75H21.604V32.1664C21.604 34.6979 22.1657 36.5902 23.2891 37.8431C24.4126 39.0705 25.9829 39.6842 28 39.6842C30.0171 39.6842 31.5874 39.0705 32.7109 37.8431C33.8343 36.5902 34.396 34.7107 34.396 32.2048V15.75H39.375V31.476C39.375 35.4139 38.4047 38.4441 36.4642 40.5664C34.5492 42.6888 31.7151 43.75 27.9617 43.75Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2551_18397">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default withLogo(TokenUNO);
