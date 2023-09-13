import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenSwETH: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-swETH"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_522_2492"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_522_2492)">
      <mask
        id="mask1_522_2492"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="-2"
        y="-2"
        width="24"
        height="24"
      >
        <path d="M21.0906 -1.09058H-1.09058V21.0906H21.0906V-1.09058Z" fill="white" />
      </mask>
      <g mask="url(#mask1_522_2492)">
        <path d="M-1.09058 21.0906H21.0906V-1.09058H-1.09058V21.0906Z" fill="url(#paint0_linear_522_2492)" />
        <mask
          id="mask2_522_2492"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="5"
          y="2"
          width="10"
          height="16"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.3353 10.4503L5.24951 10.5916L5.48589 10.923C5.41343 10.7684 5.36604 10.6052 5.3353 10.4503ZM5.61548 9.98893C6.53389 10.4491 7.83249 10.3141 9.51105 9.58394C11.2747 8.81678 12.7197 8.72373 13.8462 9.30482C13.9169 9.34129 13.982 9.37996 14.042 9.42046L10.0093 2.75429L5.61556 9.98904L5.61548 9.98893ZM14.6916 10.4945C14.6981 10.5495 14.7021 10.6038 14.7039 10.6569L14.7504 10.5916L14.6916 10.4945ZM14.3603 11.1406C13.087 10.1725 11.7015 10.2345 9.80485 11.0595C8.28683 11.7198 7.07972 11.8934 6.18341 11.5803C6.02448 11.5248 5.89326 11.4422 5.78502 11.3422L10.0092 17.2643L14.3604 11.1405L14.3603 11.1406Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_522_2492)">
          <path d="M10.0472 2.71719L9.90758 3.04307V10H10.0472L15.1201 9.09612L10.0472 2.71719Z" fill="#7591F2" />
          <path d="M9.9987 2.71719L5.52679 10.1351L9.9987 12.7776V2.71719Z" fill="white" />
          <path
            d="M9.99871 10.9828L9.9436 13.6911V17.1218L9.99871 17.2826L14.5833 10.8333L12.5878 9.11272L9.99871 10.9828Z"
            fill="#7591F2"
          />
          <path d="M9.9987 17.2826V10.9828H5.52679L9.9987 17.2826Z" fill="white" />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_522_2492"
        x1="10"
        y1="21.0906"
        x2="10.2174"
        y2="-16.3129"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3068EF" />
        <stop offset="1" stop-color="#1322AC" />
      </linearGradient>
    </defs>
  </svg>
);

export default withLogo(TokenSwETH);
