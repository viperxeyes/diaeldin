const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 118 138"
      className="w-16 h-16"
    >
      <g style={{ isolation: "isolate" }}>
        <g id="Logo">
          <g>
            <image
              width="118"
              height="138"
              opacity="0.75"
              xlinkHref="data:image/png;base64,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"
              style={{ mixBlendMode: "screen" }}
            />
            <polygon
              points="3.5 73.07 3.5 26.93 39.73 4.13 75.97 26.93 75.97 73.07 39.73 95.86 3.5 73.07"
              fill="none"
              strokeWidth="8px"
              stroke="#429df4"
              transform="translate(20, 20)"
            />
          </g>
          <g>
            <image
              width="54"
              height="58"
              transform="translate(34 40)"
              opacity="0.75"
              xlinkHref="data:image/png;base64,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"
              style={{ mixBlendMode: "screen" }}
            />
            <g id="D">
              <path
                d="M636.78,355.87a3.43,3.43,0,0,1,3-3.32s4.12-.45,8.34-.45c7.64,0,13.08,1.6,16.69,4.64s5.81,7.34,5.81,13.35-2.08,11-5.93,14.46-10.21,5.36-18.22,5.36c-3.8,0-6.68-.22-6.68-.22a3.3,3.3,0,0,1-3-3.23Zm5.32,26.9a3.33,3.33,0,0,0,3,3.25s.32,0,2.39,0c11.38,0,17.56-5.74,17.56-15.78.06-8.78-5.45-14.35-16.7-14.35-2.75,0-3.27.07-3.27.07a3.58,3.58,0,0,0-3,3.43Z"
                transform="translate(-593 -302)"
                fill="#429df4"
              />
              <path
                d="M636.78,355.87a3.43,3.43,0,0,1,3-3.32s4.12-.45,8.34-.45c7.64,0,13.08,1.6,16.69,4.64s5.81,7.34,5.81,13.35-2.08,11-5.93,14.46-10.21,5.36-18.22,5.36c-3.8,0-6.68-.22-6.68-.22a3.3,3.3,0,0,1-3-3.23Zm5.32,26.9a3.33,3.33,0,0,0,3,3.25s.32,0,2.39,0c11.38,0,17.56-5.74,17.56-15.78.06-8.78-5.45-14.35-16.7-14.35-2.75,0-3.27.07-3.27.07a3.58,3.58,0,0,0-3,3.43Z"
                transform="translate(-593 -302)"
                fill="#429df4"
                stroke="#429df4"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
