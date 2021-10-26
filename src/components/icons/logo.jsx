const Logo = () => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -4 100 125"
      className="w-12 h-12  "
    >
      <defs>
        <linearGradient
          x1="97.3756325%"
          y1="100%"
          x2="0%"
          y2="100%"
          id="gradient"
        >
          <stop stop-color="#006cc4" offset="0%"></stop>
          <stop stop-color="#0077ff" offset="100%"></stop>
        </linearGradient>
        <mask id="d-mask">
          <path
            d="M284.49,404.58h13.92q21.18,0,21.18-24.82,0-24.64-21.18-24.65H284.49Zm13.37-43.91q7.88,0,11.71,4.71t3.82,14.41q0,9.81-3.81,14.52T297.86,399h-7.27V360.67Z"
            fill="white"
          />
        </mask>
        <mask id="sp-mask">
          <path
            d="M305.54,327.78l46.57,26.76v53.52l-46.57,26.76L259,408.06V354.54Z"
            fill="white"
          />
          <path
            d="M305.54,327.78l46.57,26.76v53.52l-46.57,26.76L259,408.06V354.54Z"
            fill="white"
          />
        </mask>
        <mask id="mp-mask">
          <path
            d="M298.68,323.82l46.57,26.76V404.1l-46.57,26.76L252.11,404.1V350.58Z"
            fill="white"
          />
        </mask>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2" />
          </feComponentTransfer>
          <feBlend in2="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#glow)">
        <path
          id="D"
          d="M284.49,404.58h13.92q21.18,0,21.18-24.82,0-24.64-21.18-24.65H284.49Zm13.37-43.91q7.88,0,11.71,4.71t3.82,14.41q0,9.81-3.81,14.52T297.86,399h-7.27V360.67Z"
          transform="translate(-251.11 -322.67)"
          fill="url(#gradient)"
          className="hover:fill-current text-blue-700 text-opacity-10"
        />

        <path
          id="SecPoly"
          d="M305.54,327.78l46.57,26.76v53.52l-46.57,26.76L259,408.06V354.54Z"
          transform="translate(-251.11 -322.67)"
          fill="none"
          strokeWidth="6"
          stroke="url(#gradient)"
          mask="url(#sp-mask)"
          className="hover:fill-current text-blue-700 text-opacity-10"
        />
        <path
          id="MainPoly"
          d="M298.68,323.82l46.57,26.76V404.1l-46.57,26.76L252.11,404.1V350.58Z"
          transform="translate(-251.11 -322.67)"
          fill="none"
          strokeWidth="6"
          stroke="url(#gradient)"
          mask="url(#mp-mask)"
          className="hover:fill-current text-blue-700 text-opacity-10"
        />
      </g>
    </svg>
  );
};

export default Logo;
