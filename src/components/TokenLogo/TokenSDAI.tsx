import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const TokenDAI: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-token-sDAI"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="url(#paint0_linear_1196_16728)"
    />
    <path
      d="M19.1159 10.02H17.6919C16.9079 7.84399 14.7999 6.35199 12.0199 6.35199H7.44786V10.02H5.85986V11.336H7.44786V12.716H5.85986V14.032H7.44786V17.656H12.0199C14.7679 17.656 16.8599 16.176 17.6639 14.032H19.1159V12.716H17.9839C18.0119 12.484 18.0279 12.244 18.0279 12.004V11.972C18.0279 11.756 18.0159 11.544 17.9959 11.336H19.1199V10.02H19.1159ZM8.72786 7.52399H12.0199C14.0599 7.52399 15.5759 8.52799 16.2759 10.016H8.72786V7.52399ZM12.0199 16.472H8.72786V14.028H16.2679C15.5639 15.492 14.0519 16.472 12.0199 16.472ZM16.7039 12.032C16.7039 12.264 16.6879 12.492 16.6559 12.712H8.72786V11.332H16.6599C16.6879 11.548 16.7039 11.772 16.7039 12V12.032Z"
      fill="white"
    />
    <defs>
      <linearGradient id="paint0_linear_1196_16728" x1="12" y1="-3.4" x2="12" y2="26.52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#75B93B" />
        <stop offset="1" stopColor="#47A63E" />
      </linearGradient>
    </defs>
  </svg>
);

export default withLogo(TokenDAI);
