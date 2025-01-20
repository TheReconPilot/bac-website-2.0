type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <img src="/images/icon.svg" alt="My Logo" />
  ),
  //   twitter: (props: IconProps) => (
  //   <svg
  //     {...props}
  //     height="23"
  //     viewBox="0 0 1200 1227"
  //     width="23"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       fill="currentColor"
  //       d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
  //     />
  //   </svg>
  // ),
  instagram: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" 
    {...props}
x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path fill="currentColor" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
  ),  
  linktree: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" 
  {...props}
  x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="currentColor" d="M 22.253906 3.5 C 20.890312 3.5 19.753906 4.6364058 19.753906 6 A 1.50015 1.50015 0 0 0 22.673828 6.5 L 25.248047 6.5 L 25.248047 11.804688 C 25.248047 12.860767 25.947798 13.771864 26.806641 14.121094 C 27.665483 14.470324 28.801868 14.306819 29.539062 13.550781 L 33.087891 9.9101562 L 34.628906 11.490234 L 30.896484 15.042969 C 30.127215 15.774598 29.95135 16.916367 30.296875 17.78125 C 30.6424 18.646133 31.557452 19.353516 32.619141 19.353516 L 37.966797 19.353516 L 37.966797 21.582031 L 32.527344 21.582031 C 31.470883 21.582031 30.560005 22.282769 30.210938 23.142578 C 29.86187 24.002387 30.027594 25.138612 30.785156 25.875 L 34.621094 29.601562 L 33.085938 31.150391 L 31.474609 29.53125 A 1.50015 1.50015 0 1 0 29.349609 31.646484 L 31.314453 33.623047 C 32.279066 34.592594 33.897457 34.592407 34.861328 33.621094 L 37.107422 31.357422 C 38.074563 30.38288 38.057947 28.759345 37.074219 27.802734 L 33.759766 24.582031 L 38.466797 24.582031 C 39.830391 24.582031 40.966797 23.445625 40.966797 22.082031 L 40.966797 18.853516 C 40.966797 17.489921 39.830391 16.353516 38.466797 16.353516 L 33.871094 16.353516 L 37.064453 13.314453 C 38.05929 12.366519 38.0903 10.741922 37.130859 9.7578125 A 1.50015 1.50015 0 0 0 37.128906 9.7578125 L 34.876953 7.4492188 C 33.908568 6.4561922 32.263973 6.4574503 31.296875 7.4492188 L 28.248047 10.576172 L 28.248047 6 C 28.248047 4.6364058 27.111641 3.5 25.748047 3.5 L 22.253906 3.5 z M 14.916016 6.6933594 C 14.261827 6.6933594 13.606866 6.9420918 13.123047 7.4394531 L 10.865234 9.7617188 C 9.9093011 10.744754 9.9406398 12.368314 10.933594 13.314453 L 14.138672 16.369141 L 9.5332031 16.369141 C 8.1696089 16.369141 7.0332031 17.505546 7.0332031 18.869141 L 7.0332031 22.099609 C 7.0332031 23.463204 8.1696089 24.599609 9.5332031 24.599609 L 14.230469 24.599609 L 10.917969 27.816406 C 9.9298095 28.774921 9.9193608 30.403737 10.892578 31.376953 L 13.144531 33.630859 C 14.110621 34.596949 15.722271 34.593257 16.685547 33.625 L 24.001953 26.273438 L 25.517578 27.796875 A 1.50015 1.50015 0 1 0 27.642578 25.681641 L 25.773438 23.802734 C 24.808823 22.833187 23.193129 22.833187 22.228516 23.802734 L 14.912109 31.154297 L 13.373047 29.615234 L 17.205078 25.892578 A 1.50015 1.50015 0 0 0 17.205078 25.890625 C 17.962641 25.154237 18.128365 24.018012 17.779297 23.158203 C 17.430229 22.298394 16.519352 21.599609 15.462891 21.599609 L 10.033203 21.599609 L 10.033203 19.369141 L 15.386719 19.369141 C 16.448029 19.369141 17.361051 18.663015 17.707031 17.798828 C 18.053012 16.934642 17.881118 15.793107 17.113281 15.060547 A 1.50015 1.50015 0 0 0 17.111328 15.058594 L 13.369141 11.490234 L 14.916016 9.8984375 L 18.462891 13.546875 C 19.199822 14.303819 20.336071 14.467978 21.195312 14.119141 C 22.054555 13.770303 22.755859 12.859373 22.755859 11.802734 L 22.755859 11.064453 A 1.50015 1.50015 0 0 0 19.814453 10.630859 L 16.708984 7.4394531 C 16.225165 6.9420918 15.570204 6.6933594 14.916016 6.6933594 z M 22.238281 29.089844 C 20.874687 29.089844 19.738281 30.22625 19.738281 31.589844 L 19.738281 34.277344 A 1.50015 1.50015 0 1 0 22.738281 34.277344 L 22.738281 32.089844 L 25.234375 32.089844 L 25.234375 41.5 L 22.738281 41.5 L 22.738281 39.935547 A 1.50015 1.50015 0 1 0 19.738281 39.935547 L 19.738281 42 C 19.738281 43.363594 20.874687 44.5 22.238281 44.5 L 25.734375 44.5 C 27.097969 44.5 28.234375 43.363594 28.234375 42 L 28.234375 31.589844 C 28.234375 30.22625 27.097969 29.089844 25.734375 29.089844 L 22.238281 29.089844 z"></path>
</svg>
      ),  
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};
