const PurpleBlur = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 504 452"
  >
    <g filter="url(#filter0_f_6467_3)">
      <g filter="url(#filter1_f_6467_3)">
        <ellipse
          cx="251.544"
          cy="225.8"
          fill="url(#paint0_linear_6467_3)"
          fillOpacity="0.75"
          rx="145.744"
          ry="120"
        ></ellipse>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_6467_3"
        width="503.088"
        height="451.6"
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
        width="401.488"
        height="350"
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
        x1="172.454"
        x2="355.955"
        y1="200.887"
        y2="375.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED9CCC"></stop>
        <stop offset="1" stopColor="#5D63E5"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PurpleBlur;
