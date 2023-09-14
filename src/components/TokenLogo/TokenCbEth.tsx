import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenCbETH: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-cbETH"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_579_221"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <path d="M0 0H20V20H0V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_579_221)">
      <path
        d="M19.5 10C19.5 4.75328 15.2467 0.5 10 0.5C4.75328 0.5 0.5 4.75328 0.5 10C0.5 15.2467 4.75328 19.5 10 19.5C15.2467 19.5 19.5 15.2467 19.5 10Z"
        fill="white"
      />
      <path d="M9.99999 3L5.77367 10.1388L9.99999 8.17602V3Z" fill="#0052FF" />
      <path d="M9.99999 12.661L5.77367 10.1298L9.99999 8.17603V12.661Z" fill="#6697FF" />
      <path d="M9.9996 13.4893L5.77367 10.9573L9.9996 17V13.4893Z" fill="#0052FF" />
      <path d="M10 3L14.2262 10.1388L10 8.17602V3Z" fill="#6697FF" />
      <path d="M10 12.661L14.2262 10.1388L10 8.17603V12.661Z" fill="#CCDCFF" />
      <path d="M10 13.4893L14.2262 11.0031L10 17V13.4893Z" fill="#6697FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1C5.02945 1 1 5.02945 1 10C1 14.9705 5.02945 19 10 19C14.9705 19 19 14.9705 19 10C19 5.02945 14.9705 1 10 1ZM0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10Z"
        fill="#0052FF"
      />
    </g>
  </svg>
);

export default withLogo(TokenCbETH);
