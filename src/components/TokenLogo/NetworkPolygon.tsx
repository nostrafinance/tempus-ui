import { FC } from 'react';
import { InnerLogoProps } from './LogoProps';
import withLogo from './withLogo';

const NetworkPolygon: FC<InnerLogoProps> = ({ size }) => (
  <svg
    className="common-ui__logo common-ui__logo-network-polygon"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3901_738)">
      <mask
        id="mask0_3901_738"
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
      <g mask="url(#mask0_3901_738)">
        <path d="M20.9428 -0.942871H-0.942871V20.9428H20.9428V-0.942871Z" fill="url(#paint0_linear_3901_738)" />
      </g>
      <path
        d="M12.891 12.1571L15.7191 10.5241C15.8689 10.4375 15.9616 10.2767 15.9616 10.1037V6.83794C15.9616 6.66529 15.8685 6.50406 15.7191 6.41753L12.891 4.78447C12.7412 4.69794 12.5555 4.69835 12.4057 4.78447L9.57751 6.41753C9.42772 6.50406 9.33507 6.66529 9.33507 6.83794V12.6743L7.3518 13.8192L5.36853 12.6743V10.3841L7.3518 9.23917L8.65996 9.99427V8.45794L7.59425 7.84284C7.52078 7.80039 7.4367 7.77794 7.35139 7.77794C7.26609 7.77794 7.182 7.80039 7.10894 7.84284L4.28078 9.4759C4.13098 9.56243 4.03833 9.72325 4.03833 9.89631V13.162C4.03833 13.3347 4.13139 13.4959 4.28078 13.5824L7.10894 15.2155C7.25833 15.3016 7.44445 15.3016 7.59425 15.2155L10.4224 13.5828C10.5722 13.4963 10.6649 13.3351 10.6649 13.1624V7.3261L10.7008 7.3057L12.6481 6.18121L14.6314 7.3261V9.61631L12.6481 10.7612L11.342 10.0069V11.5432L12.4057 12.1575C12.5555 12.2437 12.7412 12.2437 12.891 12.1575V12.1571Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3901_738"
        x1="-4.94246"
        y1="0.855904"
        x2="17.651"
        y2="14.682"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A229C5" />
        <stop offset="1" stopColor="#7B3FE4" />
      </linearGradient>
      <clipPath id="clip0_3901_738">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default withLogo(NetworkPolygon);
