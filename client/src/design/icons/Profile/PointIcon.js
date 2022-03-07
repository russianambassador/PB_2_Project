import React from 'react'

const PointIcon = (props) => (
    <svg
      width={95}
      height={90}
      viewBox="0 0 95 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx={47.4692}
        cy={44.8273}
        rx={47.4692}
        ry={44.8273}
        fill="#C4C4C4"
      />
      <g filter="url(#filter0_d_264_59)">
        <path
          d="M45.958 57.25L47.1424 44.6287C47.1424 44.6287 24.719 43.3363 17.8009 25.1275C41.0442 14.5781 48.4126 41.6666 48.4126 41.6666C48.4126 41.6666 53.6323 12.3503 76.2659 13.0259C77.7494 41.9287 49.8125 44.5316 49.8125 44.5316L50.8996 57.3471L45.958 57.25Z"
          fill="#005243"
        />
        <path
          d="M26.9809 55.4176L71.0568 56.9563C71.0568 56.9563 72.1439 79.0807 48.8219 78.1544C23.6178 77.1534 26.98 55.4176 26.98 55.4176H26.9809Z"
          fill="#6D3C32"
        />
        <path
          d="M48.5029 43.9938L47.3394 42.7037L36.0933 35.8237L48.5423 44.2943L63.191 28.7444L49.4393 42.5478L48.5029 43.9938Z"
          fill="#47885E"
        />
        <path
          d="M32.0213 55.5147C32.0213 55.5147 29.5493 71.4121 48.7255 73.6264C65.6248 74.7832 66.1185 56.9607 66.1185 56.9607L71.0601 57.2499C71.0601 57.2499 72.0498 79.6026 48.4265 78.1566C23.7184 77.2889 26.882 55.3226 26.882 55.3226L32.0213 55.5147Z"
          fill="#4D1A06"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_264_59"
          x={6.38388}
          y={10.1223}
          width={82.1706}
          height={80.3021}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_264_59"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_264_59"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

export default PointIcon