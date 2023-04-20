import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenR: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-R"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="white" />
    <path
      d="M26.0394 23.0286C25.0271 24.1856 23.8541 24.764 22.5204 24.764C21.1225 24.764 19.9414 24.2579 18.9773 23.2456C18.0293 22.2332 17.258 20.6746 16.6634 18.5696L16.2778 17.3645H12.8311V22.4261H15.8681V24.4266H7.23926V22.4502H10.3485V9.89262H7.23926V7.89209H16.8322C18.7122 7.89209 20.1985 8.31791 21.2912 9.16954C22.3838 10.0212 22.9302 11.1781 22.9302 12.6403C22.9302 13.8455 22.5365 14.8658 21.7491 15.7014C20.9778 16.5209 19.8852 17.0351 18.4712 17.244L18.905 18.425C19.4031 19.839 19.9575 20.8674 20.5681 21.5102C21.1787 22.1529 21.8696 22.4743 22.6409 22.4743C23.123 22.4743 23.5327 22.3779 23.8702 22.185C24.2076 21.9922 24.5209 21.7351 24.8102 21.4137L26.0394 23.0286ZM12.8311 15.4845H16.9045C17.9329 15.4845 18.7845 15.2354 19.4594 14.7373C20.1342 14.2231 20.4717 13.5241 20.4717 12.6403C20.4717 11.7887 20.1342 11.1219 19.4594 10.6398C18.8006 10.1417 17.9489 9.89262 16.9045 9.89262H12.8311V15.4845Z"
      fill="url(#paint0_linear_1198_45604)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1198_45604"
        x1="7.23926"
        y1="7.89209"
        x2="24.0421"
        y2="26.3158"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4A07" />
        <stop offset="0.270833" stopColor="#FF5411" />
        <stop offset="0.501659" stopColor="#FF671B" />
        <stop offset="0.695754" stopColor="#FF7824" />
        <stop offset="1" stopColor="#FF722B" />
      </linearGradient>
    </defs>
  </svg>
);

export default withLogo(TokenR);
