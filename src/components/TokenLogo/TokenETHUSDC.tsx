import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenETHUSDC: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-ETH-USDC"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5729_4697)">
      <g clipPath="url(#clip1_5729_4697)">
        <path
          d="M16 32C24.8667 32 32 24.8667 32 16C32 7.13328 24.8667 0 16 0C7.13328 0 0 7.13328 0 16C0 24.8667 7.13328 32 16 32Z"
          fill="#2775CA"
        />
        <path
          d="M20.3999 18.5333C20.3999 16.2 18.9999 15.4 16.1999 15.0667C14.2 14.8 13.8 14.2667 13.8 13.3333C13.8 12.3999 14.4667 11.8 15.7999 11.8C16.9999 11.8 17.6666 12.2 17.9999 13.2C18.0666 13.4 18.2666 13.5333 18.4666 13.5333H19.5332C19.7999 13.5333 19.9999 13.3333 19.9999 13.0667V13C19.7332 11.5333 18.5332 10.4 16.9999 10.2667V8.66674C16.9999 8.40002 16.7999 8.20002 16.4667 8.1333H15.4667C15.2 8.1333 15 8.3333 14.9332 8.66674V10.2C12.9333 10.4667 11.6667 11.8 11.6667 13.4667C11.6667 15.6667 13 16.5333 15.7999 16.8667C17.6666 17.2 18.2666 17.6 18.2666 18.6667C18.2666 19.7334 17.3332 20.4667 16.0667 20.4667C14.3332 20.4667 13.7332 19.7333 13.5332 18.7333C13.4667 18.4667 13.2667 18.3333 13.0667 18.3333H11.9333C11.6667 18.3333 11.4667 18.5333 11.4667 18.8V18.8667C11.7333 20.5333 12.8 21.7333 15 22.0667V23.6667C15 23.9333 15.2 24.1333 15.5332 24.2H16.5332C16.7999 24.2 16.9999 24 17.0667 23.6667V22.0667C19.0666 21.7333 20.3999 20.3333 20.3999 18.5333V18.5333Z"
          fill="white"
        />
        <path
          d="M12.6 25.5333C7.39999 23.6667 4.73327 17.8667 6.66671 12.7333C7.66671 9.93331 9.86671 7.80003 12.6 6.80003C12.8667 6.66675 13 6.46675 13 6.13331V5.20003C13 4.93331 12.8667 4.73331 12.6 4.66675C12.5333 4.66675 12.4 4.66675 12.3333 4.73331C5.99999 6.73331 2.53327 13.4667 4.53327 19.8C5.73327 23.5333 8.59999 26.4 12.3333 27.6C12.6 27.7333 12.8667 27.6 12.9333 27.3333C13 27.2667 13 27.2 13 27.0667V26.1333C13 25.9333 12.8 25.6667 12.6 25.5333ZM19.6667 4.73331C19.4 4.60003 19.1333 4.73331 19.0667 5.00003C19 5.06675 19 5.13331 19 5.26675V6.20003C19 6.46675 19.2 6.73331 19.4 6.86675C24.6 8.73331 27.2667 14.5333 25.3333 19.6667C24.3333 22.4667 22.1333 24.6 19.4 25.6C19.1333 25.7333 19 25.9333 19 26.2667V27.2C19 27.4667 19.1333 27.6667 19.4 27.7333C19.4667 27.7333 19.6 27.7333 19.6667 27.6667C26 25.6667 29.4667 18.9333 27.4667 12.6C26.2667 8.80003 23.3333 5.93331 19.6667 4.73331V4.73331Z"
          fill="white"
        />
      </g>
    </g>
    <g clipPath="url(#clip2_5729_4697)">
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#627EEA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49899 16.2225L15.997 4V12.8718L8.49899 16.2225ZM15.997 21.9708V28L8.49899 17.6189L15.997 21.9708Z"
        fill="white"
      />
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.999 4V12.8718L23.496 16.2225L15.999 4ZM15.999 21.9695V27.9977L23.501 17.6166L15.999 21.9695ZM15.997 20.5764L8.49899 16.2225L15.997 12.8738V20.5764Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_5729_4697">
        <rect width="15" height="32" fill="white" transform="translate(17)" />
      </clipPath>
      <clipPath id="clip1_5729_4697">
        <rect width="32" height="32" fill="white" />
      </clipPath>
      <clipPath id="clip2_5729_4697">
        <rect width="15" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default withLogo(TokenETHUSDC);
