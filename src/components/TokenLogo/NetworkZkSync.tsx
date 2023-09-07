import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const NetworkZkSync: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-network-zksync"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3901_755)">
      <mask
        id="mask0_3901_755"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path
          d="M9.99999 19.9963C15.5208 19.9963 19.9963 15.5208 19.9963 9.99999C19.9963 4.47917 15.5208 0.00366211 9.99999 0.00366211C4.47917 0.00366211 0.00366211 4.47917 0.00366211 9.99999C0.00366211 15.5208 4.47917 19.9963 9.99999 19.9963Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3901_755)">
        <path d="M20.9428 -0.942871H-0.942871V20.9428H20.9428V-0.942871Z" fill="black" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1475 10.0008L13.1348 6V8.92931L9.15088 11.862L13.1348 11.8654V14L17.1475 10.0008Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9.99914L7.01273 13.9983V11.0928L10.9966 8.13627L7.01273 8.13288V6L3 9.99914Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3901_755">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default withLogo(NetworkZkSync);
