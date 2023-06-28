import React from "react";

export const TwitterIcon = <T,>(props: T) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112.197 112.197">
      <circle cx="56.099" cy="56.098" r="56.098" fill="#55acee" />
      <path
        fill="#f1f2f2"
        d="M90.461 40.316a26.753 26.753 0 0 1-7.702 2.109 13.445 13.445 0 0 0 5.897-7.417 26.843 26.843 0 0 1-8.515 3.253 13.396 13.396 0 0 0-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 0 0-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 0 1-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 0 1-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 0 1-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0 0 20.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 0 0 6.692-6.94z"
      />
    </svg>
  );
};

export const FacebookIcon = (props: any) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path
        fill="#1877f2"
        d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
      />
      <path
        fill="#fff"
        d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
      />
    </svg>
  );
};

export function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.87 28.87">
      <defs>
        <linearGradient
          id="a"
          x1="-1.84"
          x2="32.16"
          y1="30.47"
          y2="-3.03"
          gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fed576" />
          <stop offset=".26" stopColor="#f47133" />
          <stop offset=".61" stopColor="#bc3081" />
          <stop offset={1} stopColor="#4c63d2" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width="28.87"
            height="28.87"
            fill="url(#a)"
            rx="6.48"
            ry="6.48"
          />
          <g data-name="<Group>">
            <path
              fill="#fff"
              d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
              data-name="<Compound Path>"
            />
            <path
              fill="#fff"
              d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
              data-name="<Compound Path>"
            />
            <path
              fill="#fff"
              d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
              data-name="<Path>"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function GitHubIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" />
    </svg>
  );
}

export function LinkedInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7.025 7.025 497.951 497.95">
      <linearGradient
        id="a"
        x1="-974.482"
        x2="-622.378"
        y1="1306.773"
        y2="1658.877"
        gradientTransform="translate(1054.43 -1226.825)"
        gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="#2489be" />
        <stop offset={1} stopColor="#0575b3" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
      />
    </svg>
  );
}
