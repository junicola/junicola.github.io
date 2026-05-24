const PurpleBlur = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="563"
    height="501"
    fill="none"
    viewBox="0 0 563 501"
  >
    <g filter="url(#filter0_f_6467_3)">
      <g filter="url(#filter1_f_6467_3)">
        <ellipse
          cx="281.3"
          cy="250.3"
          fill="url(#paint0_linear_6467_3)"
          fillOpacity="0.48"
          rx="175.5"
          ry="144.5"
        ></ellipse>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_6467_3"
        width="562.6"
        height="500.6"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_6467_3"
          stdDeviation="52.9"
        ></feGaussianBlur>
      </filter>
      <filter
        id="filter1_f_6467_3"
        width="461"
        height="399"
        x="50.8"
        y="50.8"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_6467_3"
          stdDeviation="27.5"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_6467_3"
        x1="186.063"
        x2="407.028"
        y1="220.3"
        y2="430.082"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED9CCC"></stop>
        <stop offset="1" stopColor="#5D63E5"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PurpleBlur;
