import React from 'react';

const Companies = () => (
  <div style={{maxWidth: '40rem', margin: 'auto'}}>
    {[netflix, kayak, box, cisco, contacts1800, logdna].map((svg, i) => (
      <div key={i} style={{height: '2.5rem', width: '9rem', display: 'inline-block', margin: '1rem 2rem'}}>
        {svg}
      </div>
    ))}
  </div>
);

const box = (
  <svg id="Layer_1" viewBox="0 0 40 21.6" width="100%" height="100%">
    <path style={{fill: '#0061d5'}}
          d="M39.7 19.2c.5.7.4 1.6-.2 2.1-.7.5-1.7.4-2.2-.2l-3.5-4.5-3.4 4.4c-.5.7-1.5.7-2.2.2-.7-.5-.8-1.4-.3-2.1l4-5.2-4-5.2c-.5-.7-.3-1.7.3-2.2.7-.5 1.7-.3 2.2.3l3.4 4.5L37.3 7c.5-.7 1.4-.8 2.2-.3.7.5.7 1.5.2 2.2L35.8 14l3.9 5.2zm-18.2-.6c-2.6 0-4.7-2-4.7-4.6 0-2.5 2.1-4.6 4.7-4.6s4.7 2.1 4.7 4.6c-.1 2.6-2.2 4.6-4.7 4.6zm-13.8 0c-2.6 0-4.7-2-4.7-4.6 0-2.5 2.1-4.6 4.7-4.6s4.7 2.1 4.7 4.6c0 2.6-2.1 4.6-4.7 4.6zM21.5 6.4c-2.9 0-5.5 1.6-6.8 4-1.3-2.4-3.9-4-6.9-4-1.8 0-3.4.6-4.7 1.5V1.5C3.1.7 2.4 0 1.6 0 .7 0 0 .7 0 1.5v12.6c.1 4.2 3.5 7.5 7.7 7.5 3 0 5.6-1.7 6.9-4.1 1.3 2.4 3.9 4.1 6.8 4.1 4.3 0 7.8-3.4 7.8-7.7.1-4.1-3.4-7.5-7.7-7.5z"/>
  </svg>
);

const netflix = (
  <svg viewBox="0 0 111 30" id="netflix-logo" width="100%" height="100%">
    <path style={{fill: '#e50914'}}
          d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"/>
  </svg>
);

const cisco = (
  <svg viewBox="0 0 300 159.06394" height="100%" width="100%">
    <g transform="translate(-446.85715,-442.59426)">
      <g transform="matrix(1.3796296,0,0,-1.3796296,745.85714,492.3076)">
        <path style={{fill: '#049fd9'}}
              d="M 0,0 C 0,2.587 -2.104,4.684 -4.687,4.684 -7.277,4.684 -9.381,2.587 -9.381,0 l 0,-9.853 c 0
              -2.601 2.104,-4.699 4.694,-4.699 2.583,0 4.687,2.098 4.687,4.699 L 0,0 Z m -25.787,12.932 c 0
              2.586 -2.098,4.687 -4.746,4.687 -2.59,0 -4.688,-2.101 -4.688,-4.687 l 0,-22.785 c 0,-2.601 2.098
              -4.699 4.688,-4.699 2.648,0 4.746,2.098 4.746,4.699 l 0,22.785 z m -25.84,17.692 c 0,2.587 -2.098
              4.685 -4.687,4.685 -2.59,0 -4.688,-2.098 -4.688,-4.685 l 0,-49.84 c 0,-2.602 2.098,-4.699 4.688
              -4.699 2.589,0 4.687,2.097 4.687,4.699 l 0,49.84 z M -77.473,12.932 c 0,2.586 -2.097,4.687 -4.687
              4.687 -2.584,0 -4.688,-2.101 -4.688,-4.687 l 0,-22.785 c 0,-2.601 2.104,-4.699 4.688,-4.699 2.59
              0 4.687,2.098 4.687,4.699 l 0,22.785 z M -103.313,0 c 0,2.587 -2.097,4.684 -4.672,4.684 -2.59
              0 -4.702,-2.097 -4.702,-4.684 l 0,-9.853 c 0,-2.601 2.112,-4.699 4.702,-4.699 2.575,0 4.672
              2.098 4.672,4.699 l 0,9.853 z m -25.798,12.932 c 0,2.586 -2.113,4.687 -4.702,4.687 -2.59,0 -4.703
              -2.101 -4.703,-4.687 l 0,-22.785 c 0,-2.601 2.113,-4.699 4.703,-4.699 2.589,0 4.702,2.098 4.702
              4.699 l 0,22.785 z m -25.828,17.692 c 0,2.587 -2.113,4.685 -4.703,4.685 -2.589,0 -4.702,-2.098 -4.702
              -4.685 l 0,-49.84 c 0,-2.602 2.113,-4.699 4.702,-4.699 2.59,0 4.703,2.097 4.703,4.699 l 0
              49.84 z m -25.829,-17.692 c 0,2.586 -2.112,4.687 -4.702,4.687 -2.59,0 -4.702,-2.101 -4.702
              -4.687 l 0,-22.785 c 0,-2.601 2.112,-4.699 4.702,-4.699 2.59,0 4.702,2.098 4.702,4.699 l 0
              22.785 z M -206.596,0 c 0,2.587 -2.112,4.684 -4.702,4.684 C -213.885,4.684 -216,2.587 -216,0 l 0
              -9.853 c 0,-2.601 2.115,-4.699 4.702,-4.699 2.59,0 4.702,2.098 4.702,4.699 l 0,9.853 z m 97.076
              -40.855 c -0.282,0.077 -4.621,1.196 -9.232,1.196 -8.73,0 -13.986,-4.714 -13.986,-11.734 0,-6.214 4.397
              -9.313 9.674,-10.98 0.585,-0.193 1.447,-0.463 2.021,-0.653 2.349,-0.739 4.224,-1.837 4.224,-3.739 0
              -2.127 -2.167,-3.504 -6.878,-3.504 -4.14,0 -8.109,1.184 -8.945,1.395 l 0,-8.637 c 0.466,-0.099 5.183
              -1.025 10.222,-1.025 7.248,0 15.539,3.167 15.539,12.595 0,4.573 -2.8,8.783 -8.947,10.737 l -2.613
              0.832 c -1.559,0.492 -4.342,1.289 -4.342,3.574 0,1.805 2.062,3.076 5.859,3.076 3.276,0 7.263
              -1.101 7.404,-1.145 l 0,8.012 z m 80.041,-18.243 c 0,-5.461 -4.183,-9.879 -9.796,-9.879 -5.619
              0 -9.791,4.418 -9.791,9.879 0,5.45 4.172,9.87 9.791,9.87 5.613,0 9.796,-4.42 9.796,-9.87 m -9.796
              19.427 c -11.544,0 -19.823,-8.707 -19.823,-19.427 0,-10.737 8.279,-19.438 19.823,-19.438 11.543
              0 19.834,8.701 19.834,19.438 0,10.72 -8.291,19.427 -19.834,19.427 m -128.655,-1.345 c -0.89
              0.264 -4.18,1.345 -8.636,1.345 -11.526,0 -19.987,-8.218 -19.987,-19.427 0,-12.093 9.34,-19.438 19.987
              -19.438 4.23,0 7.459,1.002 8.636,1.336 l 0,10.075 c -0.407,-0.226 -3.503,-1.992 -7.957,-1.992 -6.31
              0 -10.38,4.441 -10.38,10.019 0,5.748 4.246,10.011 10.38,10.011 4.53,0 7.576,-1.805 7.957,-2.004 l 0
              10.075 z m 98.86,0 c -0.897,0.264 -4.19,1.345 -8.631,1.345 -11.543,0 -20.004,-8.218 -20.004,-19.427 0
              -12.093 9.351,-19.438 20.004,-19.438 4.207,0 7.441,1.002 8.631,1.336 l 0,10.075 c -0.416,-0.226 -3.516
              -1.992 -7.969,-1.992 -6.305,0 -10.371,4.441 -10.371,10.019 0,5.748 4.248,10.011 10.371,10.011 4.529
              0 7.582,-1.805 7.969,-2.004 l 0,10.075 z m -76.369,-36.852 -9.472,0 0,37.532 9.472,0 0,-37.532 z"/>
      </g>
    </g>
  </svg>
);

const kayak = (
  <svg width="100%" height="100%" viewBox="0 0 125 24">
    <path style={{fill: '#ff690f'}}
          d="M23.94,23.97l-23.94,0l0,-23.94l23.94,0l0,23.94Zm25.27,0l-23.94,0l0,-23.94l23.94,0l0,23.94Zm25.26,0l-23.94
          0l0,-23.94l23.94,0l0,23.94Zm50.53,0l-23.94,0l0,-23.94l23.94,0l0,23.94Zm-25.26,0l-23.94,0l0,-23.94l23.94,0l0,23.94Z"/>
    <path style={{fill: '#fff'}}
          d="M64,18l-2.93,0l0,-5.29l-3.93,-6.71l3.46,0l1.94,3.68l1.91,-3.68l3.41,0l-3.86,6.71l0,5.29Zm-21
          0l-3.17,0l-0.52,-1.72l-4.24,-0.02l-0.52,1.74l-3.1,0l3.94,-12l3.7,0l3.91,12Zm50.53,0l-3.17,0l-0.52
          -1.72l-4.24,-0.02l-0.52,1.74l-3.1,0l3.94,-12l3.7,0l3.91,12Zm-83.24,-0.01l-2.91,0l0,-11.97l2.91,0l0
          5.528l3.06,-5.528l3.21,0l-3.33,5.98l3.33,5.98l-3.21,0l-3.06,-5.528l0,5.538Zm101.06,0l-2.91,0l0
          -11.97l2.91,0l0,5.528l3.06,-5.528l3.21,0l-3.33,5.98l3.33,5.98l-3.21,0l-3.06,-5.528l0,5.538Zm-74.16
          -8.55l-1.4,4.47l2.8,0l-1.4,-4.47Zm50.53,0l-1.4,4.47l2.8,0l-1.4,-4.47Z"/>
  </svg>
);

const contacts1800 = (
  <svg viewBox="0 0 478 58" width="100%" height="100%">
    <polygon fill="#ffffff"
             points="14.9,13.4 1.9,18.1 1.9,23.7 8.7,21.3 8.7,49.6 1.9,49.6 1.9,55.1 21.7,55.1 21.7,49.6 14.9,49.6 	"/>
    <path fill="#ffffff" d="M60,26c4-2.3,6.2-6.3,6.2-11c0-7.1-6.3-13.1-13.7-13.1c-8.3,0-14.6,5.9-14.6,13.6c0,4.7,2.4,8.6,6.5,10.8
		c-5.6,2.4-9.2,7.8-9.2,13.9c0,8.9,7.5,15.9,17.1,15.9c9.4,0,17.1-7.3,17.1-16.4C69.4,33.9,65.6,28.4,60,26z M43.8,15.6
		c0-4.5,3.7-8.2,8.3-8.2c4.6,0,8.3,3.7,8.3,8.3c0,4.5-3.7,8.2-8.4,8.2C47.5,23.9,43.8,20.1,43.8,15.6z M52.2,50.5
		c-6.1,0-10.8-4.7-10.8-10.6c0-5.7,4.9-10.5,10.7-10.5c6,0,10.8,4.7,10.8,10.5C62.9,45.8,58.1,50.5,52.2,50.5z"/>
    <path fill="#ffffff" d="M93,12.3c-5.1,0-10.2,2.2-13.8,6.1c-3.4,3.5-4.8,7.4-4.8,13.1v5.4c0,5.9,1.7,10.2,5.5,13.8
		c3.6,3.5,8.3,5.4,13.2,5.4c5.2,0,10.2-2.2,13.9-6c3.3-3.5,4.7-7.5,4.7-13.2v-5.4c0-6-1.6-10.2-5.5-13.8
		C102.7,14.3,97.9,12.3,93,12.3z M105.4,36.9c0,3.3-0.4,5.9-2.2,8.5c-2.2,3.1-6.1,5-10.1,5c-3.9,0-7.6-1.8-9.8-4.8
		c-2.1-2.6-2.5-5.4-2.5-8.7v-5.3c0-3.2,0.4-5.8,2.3-8.4c2.2-3.1,6.1-5,10-5c4,0,7.7,1.8,9.9,4.8c2,2.6,2.4,5.2,2.4,8.7V36.9z"/>
    <path fill="#ffffff" d="M135.1,12.3c-5.2,0-10.2,2.2-13.8,6.1c-3.4,3.5-4.8,7.4-4.8,13.1v5.4c0,5.9,1.7,10.2,5.5,13.8
		c3.6,3.5,8.3,5.4,13.2,5.4c5.2,0,10.2-2.2,13.9-6c3.3-3.5,4.7-7.5,4.7-13.2v-5.4c0-6-1.6-10.2-5.5-13.8
		C144.8,14.3,140,12.3,135.1,12.3z M147.5,36.9c0,3.3-0.4,5.9-2.2,8.5c-2.2,3.1-6.1,5-10.1,5c-3.9,0-7.6-1.8-9.8-4.8
		c-2.1-2.6-2.5-5.4-2.5-8.7v-5.3c0-3.2,0.4-5.8,2.3-8.4c2.2-3.1,6.1-5,10.1-5c4,0,7.7,1.8,9.9,4.8c2,2.6,2.4,5.2,2.4,8.7V36.9z"/>
    <path fill="#ffd000" d="M200.5,42.7c-2.1,4.6-7.1,7.6-12.5,7.6c-8.3,0-14.8-6.2-14.8-14.1c0-8.1,6.3-14.4,14.4-14.4
		c5.1,0,9.9,2.7,12.6,6.9l0.2,0.3h5.4V16.7h-5.6v4.5c-3.5-3.4-7.9-5.1-12.8-5.1c-5.4,0-10.3,2.1-14.3,6.1c-3.7,3.7-5.7,8.8-5.7,14.1
		c0,10.8,9.3,19.8,20.3,19.8c8.8,0,16.5-5.2,19.4-13l0.3-0.7h-6.5L200.5,42.7z"/>
    <path fill="#ffd000" d="M230.4,16c-11.4,0-20.6,9-20.6,20.1c0,11,9.2,20,20.5,20c11.3,0,20.5-9.1,20.5-20.3
		C250.8,24.9,241.7,16,230.4,16z M230.3,50.4c-8,0-14.6-6.5-14.6-14.4c0-7.9,6.6-14.3,14.7-14.3c8,0,14.5,6.4,14.5,14.3
		C244.9,44,238.3,50.4,230.3,50.4z"/>
    <path fill="#ffd000" d="M291.8,33.5c0-5-1.4-8.4-2.2-10c-2.4-4.9-8.8-7.5-13.6-7.5c-5,0-9.5,2.2-12.2,5.8v-5.2h-12.3v5.5h6.4v27.4
		h-6.4v5.5h18.7v-5.5h-6.4v-15c0-3.1,0-6.4,2.4-9.2c2-2.3,5.3-3.7,8.5-3.7c2.1,0,7.2,0.4,9.4,4.3c1.6,2.7,1.7,5.6,1.7,9.2v14.4h-6.4
		v5.5h18.7v-5.5h-6.4V33.5z"/>
    <path fill="#ffd000" d="M308.3,39.5l0-17.3h8.4v-5.5h-8.4V3.2h-5.9v13.5h-7.3v5.5h7.3v18.4c0,10.4,4,15.5,12.2,15.5h2.7v-5.6h-2.7
		C308.3,50.4,308.3,44.9,308.3,39.5z"/>
    <path fill="#ffd000" d="M354.2,23.6c-3.6-5-8.7-7.5-15-7.5c-7.1,0-13.8,3.6-16.9,9.1l-0.1,0.2c-1.6,2.7-3.1,5.3-3.1,10.7
		c-0.1,3.9,1,7.6,3.1,11c3.4,5.6,10,9,17.1,9c6.1,0,11.5-2.7,15-7.4v6.4h11v-5.5h-5.1V22.2h5.1v-5.5h-11V23.6z M339.4,50.5
		c-7.9,0-14.6-6.6-14.6-14.3c0-7.9,6.6-14.4,14.8-14.4c8,0,14.6,6.4,14.6,14.3C354.3,44.1,347.8,50.5,339.4,50.5z"/>
    <path fill="#ffd000" d="M399.6,42.7c-2.1,4.6-7.1,7.6-12.5,7.6c-8.3,0-14.8-6.2-14.8-14.1c0-8.1,6.3-14.4,14.4-14.4
		c5.1,0,9.9,2.7,12.6,6.9l0.2,0.3h5.4V16.7h-5.6v4.5c-3.5-3.4-7.8-5.1-12.8-5.1c-5.4,0-10.3,2.1-14.3,6.1c-3.7,3.7-5.7,8.8-5.7,14.1
		c0,10.8,9.3,19.8,20.3,19.8c8.8,0,16.5-5.2,19.4-13l0.3-0.7h-6.5L399.6,42.7z"/>
    <path fill="#ffd000" d="M422,39.5l0-17.3h8.4v-5.5H422V3.2h-5.9v13.5h-7.3v5.5h7.3v18.4c0,10.4,4,15.5,12.2,15.5h2.7v-5.6h-2.7
		C422,50.4,422,44.9,422,39.5z"/>
    <path fill="#ffd000" d="M458.3,35.7c-2.8-1.6-6-2.3-8.8-2.8c-4.2-0.9-8-2-8-6.1c0-3.8,3.5-5.8,6.9-5.8c1.8,0,3.6,0.6,5,1.6
		c1.4,1,2.2,2.5,2.2,4.1l0,0.5h5V16.7h-5v2.4c-1.9-2-4.6-3.1-8.1-3.1c-3.3,0-8,1.1-10.5,4.3c-1.5,1.9-2.1,3.9-2.1,6.7
		c0,3.4,1.7,6.5,4.8,8.4c2.5,1.5,5.4,2.1,8.2,2.7l0.6,0.1c4.1,0.8,8.3,1.7,8.3,6.4c0,4.1-3.9,6.6-7.7,6.6c-4.9,0-8.7-3.1-9.2-7.4
		l0-0.5h-5v11.8h5v-3.3c2.3,2.8,5.7,4.3,10,4.3c5,0,9.8-2.4,11.6-5.8c0.9-1.6,1.7-3.5,1.7-6C463.3,40.7,461.5,37.5,458.3,35.7z"/>
    <path fill="#ffd000" d="M473.5,12.5c0-1-0.8-1.5-2.4-1.5h-2.2v5.7h1.2v-2.4h0.9l1.1,2.4h1.4l-1.3-2.6
		C473.1,13.8,473.5,13.3,473.5,12.5z M470.9,13.5h-0.8v-1.8h0.8c0.9,0,1.4,0.3,1.4,0.9C472.3,13.2,471.8,13.5,470.9,13.5z"/>
    <path fill="#ffd000" d="M474.6,10.3c-1-1-2.3-1.5-3.7-1.5c-1.4,0-2.6,0.5-3.6,1.4c-1,1-1.5,2.3-1.5,3.6c0,1.3,0.5,2.6,1.5,3.5
		c1,1,2.3,1.5,3.6,1.5c1.3,0,2.6-0.5,3.6-1.5c1-0.9,1.5-2.2,1.5-3.6C476.1,12.5,475.6,11.3,474.6,10.3z M474.1,16.9
		c-0.9,0.8-2,1.3-3.2,1.3c-1.1,0-2.2-0.5-3-1.3c-0.8-0.8-1.3-1.9-1.3-3c0-1.1,0.5-2.2,1.3-3.1c0.8-0.8,1.9-1.2,3.1-1.2
		c1.2,0,2.3,0.4,3.1,1.3c0.8,0.8,1.2,1.9,1.2,3.1C475.4,15,474.9,16.1,474.1,16.9z"/>
  </svg>
);

const logdna = (
  <svg width="100%" height="100%" viewBox="0 0 960.000000 300.000000">
    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
       fill="#ddd">
      <path fill="#DB0A5B" d="M1325 2736 c-55 -24 -940 -538 -963 -560 -13 -11 -33 -38 -43 -58
-18 -35 -19 -67 -19 -618 0 -551 1 -583 19 -618 10 -20 30 -47 43 -58 25 -23
912 -538 965 -560 47 -20 126 -17 176 6 23 11 247 139 497 283 397 230 459
269 485 306 l30 43 0 598 0 598 -30 43 c-26 37 -88 76 -485 306 -250 144 -474
272 -497 283 -49 23 -133 26 -178 6z m278 -315 c108 -62 127 -77 127 -98 l0
-24 -212 6 c-333 9 -416 15 -422 30 -3 9 31 35 100 75 145 85 160 91 224 87
48 -3 73 -13 183 -76z m-623 -311 c52 -287 149 -503 270 -599 l50 -39 -45 -22
c-24 -12 -69 -48 -100 -81 -100 -109 -168 -290 -196 -520 -7 -57 -14 -106 -15
-108 -5 -6 -327 182 -361 212 -71 62 -68 42 -68 547 0 499 -2 482 62 542 15
15 105 71 198 126 137 79 171 95 176 83 4 -9 17 -72 29 -141z m1068 54 c185
-107 205 -122 233 -176 18 -35 19 -65 19 -488 0 -423 -1 -453 -19 -488 -28
-54 -48 -69 -241 -181 l-175 -101 -8 48 c-64 375 -147 594 -273 718 l-62 61
35 12 c19 7 59 37 88 67 106 105 178 278 211 502 9 67 19 122 22 122 2 0 79
-43 170 -96z m-332 -1 c-12 -111 -4 -104 -109 -98 -51 3 -176 8 -280 11 -181
6 -187 7 -192 28 -23 101 -23 106 -6 107 22 2 405 15 510 17 l83 2 -6 -67z
m-31 -215 c-4 -24 -11 -60 -16 -81 l-10 -38 -177 6 c-97 3 -200 8 -228 11
l-51 5 -16 53 c-10 29 -17 58 -17 64 0 8 48 12 158 15 86 1 204 4 260 5 l104
2 -7 -42z m-50 -210 c-16 -52 -63 -123 -97 -149 l-38 -27 -61 23 c-73 26 -117
60 -159 120 l-31 44 138 4 c76 1 164 4 196 5 56 2 58 1 52 -20z m-255 -294
c56 -18 119 -68 148 -118 l20 -34 -141 -7 c-78 -4 -161 -5 -184 -3 l-43 3 24
50 c23 49 61 91 101 113 25 14 18 15 75 -4z m22 -250 l197 -6 22 -65 c11 -35
19 -67 16 -69 -7 -7 -498 -27 -504 -20 -5 5 12 122 23 159 4 11 12 16 27 12
12 -2 111 -7 219 -11z m27 -244 c129 -6 236 -12 239 -14 2 -3 10 -32 17 -64
l12 -60 -186 -6 c-102 -3 -237 -8 -300 -11 l-113 -6 7 78 c4 43 9 81 12 86 5
9 26 9 312 -3z m269 -251 c14 -5 22 -17 22 -31 -1 -19 -23 -36 -123 -93 -117
-67 -125 -70 -188 -70 -63 0 -70 3 -190 72 -121 69 -124 72 -127 108 l-3 37
293 -7 c161 -4 303 -11 316 -16z"/>
      <path d="M2872 1753 l3 -648 28 -56 c41 -84 115 -129 214 -129 l43 0 0 50 0
50 -42 6 c-53 9 -102 54 -117 109 -7 27 -11 239 -11 653 l0 612 -60 0 -61 0 3
-647z"/>
      <path d="M6530 2194 l0 -206 -27 6 c-16 3 -61 10 -100 16 -228 34 -451 -87
-555 -300 -44 -91 -58 -155 -58 -263 0 -153 46 -268 152 -382 120 -128 247
-172 473 -161 134 6 185 14 293 42 l62 17 0 718 0 719 -120 0 -120 0 0 -206z
m-109 -394 c30 -6 66 -15 82 -21 l27 -11 0 -323 0 -322 -52 -7 c-174 -20 -285
7 -357 89 -130 149 -123 382 15 504 66 58 118 81 225 100 4 1 31 -4 60 -9z"/>
      <path d="M3810 2008 c-141 -14 -267 -90 -357 -216 -63 -89 -92 -161 -101 -261
-14 -154 12 -283 80 -387 119 -181 307 -270 513 -244 129 16 214 60 303 154
117 123 157 227 156 406 -1 173 -38 266 -155 394 -111 121 -259 173 -439 154z
m232 -145 c264 -125 331 -502 130 -725 -158 -176 -408 -182 -575 -14 -93 93
-128 185 -128 335 1 135 40 238 123 321 87 87 174 121 298 117 72 -2 95 -7
152 -34z"/>
      <path d="M7372 2010 c-98 -10 -177 -25 -249 -48 l-53 -16 0 -513 0 -513 120 0
120 0 0 429 0 429 53 13 c76 20 211 18 274 -4 65 -23 135 -84 159 -139 16 -38
19 -81 22 -385 l4 -343 114 0 114 0 0 353 c0 287 -3 364 -16 412 -40 158 -160
271 -325 309 -84 20 -233 27 -337 16z"/>
      <path d="M8650 2014 c-109 -20 -257 -82 -295 -124 -15 -17 -14 -22 30 -88 l47
-70 71 33 c122 55 228 69 324 40 58 -17 117 -71 132 -120 14 -47 22 -97 13
-93 -68 36 -95 42 -192 46 -227 9 -412 -82 -483 -236 -18 -39 -22 -65 -22
-152 0 -119 11 -146 93 -232 84 -88 235 -130 389 -110 96 13 142 32 193 78 28
25 41 32 44 23 3 -8 10 -31 16 -51 l12 -38 94 0 95 0 -3 388 c-3 374 -4 389
-25 442 -46 113 -133 196 -251 240 -56 22 -219 35 -282 24z m278 -603 l52 -23
0 -87 c0 -78 -2 -90 -22 -108 -99 -91 -351 -93 -431 -5 -47 51 -38 132 19 186
72 67 269 86 382 37z"/>
      <path d="M5008 1995 c-142 -36 -254 -124 -320 -250 -49 -94 -68 -174 -68 -285
0 -301 181 -520 455 -549 88 -10 209 3 278 29 28 11 56 20 61 20 16 0 -1 -124
-24 -178 -14 -32 -40 -68 -67 -92 -122 -107 -335 -92 -516 36 -26 19 -51 34
-55 34 -5 0 -23 -17 -40 -39 l-31 -39 22 -20 c84 -77 244 -145 369 -158 174
-17 353 68 420 199 44 87 48 140 48 714 0 507 -1 542 -17 547 -128 40 -414 57
-515 31z m345 -107 l67 -10 0 -403 0 -403 -82 -22 c-113 -31 -228 -37 -303
-15 -216 62 -344 298 -291 536 42 189 182 315 366 332 50 4 163 -2 243 -15z"/>
    </g>
  </svg>
);

export default Companies;