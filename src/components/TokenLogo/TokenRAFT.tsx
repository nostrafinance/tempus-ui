import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenRAFT: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-RAFT"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="white"
    />
    <path
      d="M13 22C15.2531 21.8445 17.4623 20.9042 19.1847 19.1789C20.9029 17.4578 21.8414 15.2513 22 13H16.768C16.6278 13.9126 16.2069 14.7903 15.5051 15.4932C14.7993 16.2003 13.9169 16.6227 13 16.7607V22Z"
      fill="url(#paint0_linear_2545_28732)"
    />
    <path
      d="M11 22V16.7691C10.0645 16.6432 9.161 16.2175 8.44211 15.4919C7.74603 14.7894 7.32854 13.9121 7.18954 13H2C2.15724 15.25 3.08809 17.4554 4.79246 19.1756C6.51943 20.9187 8.73994 21.8602 11 22Z"
      fill="url(#paint1_linear_2545_28732)"
    />
    <path
      d="M2 11C2.13503 8.73984 3.06745 6.51844 4.79718 4.7916C6.52284 3.06872 8.74165 2.13825 11 2V7.17014C10.0652 7.29464 9.16239 7.71542 8.44405 8.43258C7.72175 9.1537 7.29953 10.0611 7.17757 11H2Z"
      fill="url(#paint2_linear_2545_28732)"
    />
    <path
      d="M13 2V7.1785C13.9162 7.31485 14.7979 7.73239 15.5032 8.43123C16.2315 9.15272 16.6571 10.0606 16.78 11H22C21.8639 8.73865 20.9238 6.51608 19.18 4.78833C17.4589 3.08313 15.2514 2.15366 13 2Z"
      fill="url(#paint3_linear_2545_28732)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2545_28732"
        x1="5.16766"
        y1="5.88836"
        x2="19.6743"
        y2="18.8372"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF661E" />
        <stop offset="1" stopColor="#FF9308" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2545_28732"
        x1="4.48809"
        y1="5.89215"
        x2="18.9741"
        y2="18.7246"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF661E" />
        <stop offset="1" stopColor="#FF9308" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2545_28732"
        x1="4.49304"
        y1="5.2288"
        x2="18.8286"
        y2="18.0677"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF661E" />
        <stop offset="1" stopColor="#FF9308" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2545_28732"
        x1="5.17365"
        y1="5.22576"
        x2="19.5283"
        y2="18.18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF661E" />
        <stop offset="1" stopColor="#FF9308" />
      </linearGradient>
    </defs>
  </svg>
);

export default withLogo(TokenRAFT);
