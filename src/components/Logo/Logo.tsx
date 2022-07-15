import React from "react";

import { SVG } from "./styles";

interface LogoProps {
  width?: string | number;
  height?: string | number;
}

export const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <SVG
      width={width || 100}
      height={height || 100}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500">
      <path d="M199.308 246.001c-14.439 0-27.49-3.24-39.153-9.719-11.663-6.665-20.826-15.921-27.491-27.768-6.664-12.033-9.996-25.917-9.996-41.652 0-15.551 3.425-29.342 10.274-41.375 6.85-12.033 16.198-21.289 28.046-27.768C172.836 91.239 186.072 88 200.696 88c14.625 0 27.861 3.24 39.709 9.719 11.848 6.479 21.196 15.735 28.046 27.768 6.849 12.033 10.274 25.824 10.274 41.375 0 15.55-3.517 29.341-10.552 41.374-7.035 12.033-16.661 21.381-28.879 28.046-12.033 6.479-25.361 9.719-39.986 9.719zm0-27.491c8.145 0 15.735-1.944 22.77-5.831 7.22-3.888 13.051-9.719 17.494-17.494s6.664-17.216 6.664-28.323c0-11.108-2.129-20.456-6.387-28.046-4.257-7.775-9.903-13.607-16.938-17.494-7.035-3.888-14.625-5.832-22.77-5.832s-15.735 1.944-22.77 5.832c-6.849 3.887-12.31 9.719-16.383 17.494-4.073 7.59-6.109 16.938-6.109 28.046 0 16.475 4.165 29.249 12.496 38.32 8.515 8.885 19.16 13.328 31.933 13.328z" />
      <path d="M348.029 88c11.848 0 22.308 2.407 31.378 7.22 9.257 4.628 16.476 10.459 21.66 17.494V90.499H433v155.502c0 14.069-2.962 26.565-8.886 37.487-5.924 11.107-14.532 19.808-25.824 26.102-11.107 6.294-24.436 9.441-39.986 9.441-20.734 0-26.168-3.53-39.867-13.341-13.699-9.626-1.294-22.388-3.145-39.049l-.584-1.758c2.406 7.96 7.497 14.347 15.272 19.16 7.96 4.998 17.402 7.497 28.324 7.497 12.773 0 23.047-3.887 30.822-11.662 7.961-7.775 11.941-19.068 11.941-33.877v-25.547c-5.369 7.22-12.681 13.329-21.937 18.327-9.071 4.813-19.438 7.22-31.101 7.22-13.328 0-25.546-3.332-36.653-9.997-10.923-6.849-19.623-16.29-26.103-28.323-6.294-12.218-9.441-26.01-9.441-41.375 0-15.365 3.147-28.971 9.441-40.819 6.48-11.848 15.18-21.011 26.103-27.49C322.483 91.331 334.701 88 348.029 88zm53.038 78.862c0-10.552-2.222-19.716-6.665-27.491-4.258-7.775-9.904-13.699-16.938-17.772-7.035-4.072-14.625-6.109-22.77-6.109s-15.735 2.037-22.77 6.109c-7.035 3.888-12.773 9.719-17.216 17.494-4.258 7.59-6.387 16.661-6.387 27.213s2.129 19.808 6.387 27.768c4.443 7.96 10.181 14.069 17.216 18.327 7.22 4.073 14.81 6.109 22.77 6.109 8.145 0 15.735-2.036 22.77-6.109 7.034-4.072 12.68-9.996 16.938-17.771 4.443-7.961 6.665-17.217 6.665-27.768zM109.64 367.486c-14.44 0-27.49-3.239-39.153-9.719-11.663-6.664-20.826-15.92-27.49-27.768C36.331 317.966 33 304.082 33 288.347c0-15.55 3.425-29.342 10.274-41.374 6.85-12.033 16.198-21.289 28.046-27.769 11.848-6.479 25.084-9.718 39.708-9.718 14.625 0 27.861 3.239 39.709 9.718 11.848 6.48 21.196 15.736 28.046 27.769 6.849 12.032 10.274 25.824 10.274 41.374s-3.517 29.342-10.552 41.375c-7.035 12.032-16.661 21.381-28.879 28.045-12.033 6.48-25.361 9.719-39.986 9.719zm0-27.49c8.145 0 15.735-1.944 22.77-5.831 7.22-3.888 13.051-9.719 17.494-17.494s6.664-17.217 6.664-28.324c0-11.107-2.129-20.456-6.386-28.046-4.258-7.775-9.904-13.606-16.939-17.494-7.035-3.887-14.625-5.831-22.77-5.831s-15.735 1.944-22.77 5.831c-6.85 3.888-12.31 9.719-16.383 17.494-4.073 7.59-6.109 16.939-6.109 28.046 0 16.476 4.165 29.249 12.496 38.32 8.515 8.886 19.16 13.329 31.933 13.329z" />
      <path d="M258.361 209.486c11.848 0 22.308 2.406 31.378 7.219 9.257 4.628 16.476 10.46 21.66 17.494v-22.214l31.933 7.497v148.004c0 14.069-2.962 26.565-8.886 37.487-5.924 11.108-14.532 19.808-25.824 26.102-11.107 6.294-24.436 9.441-39.986 9.441-20.734 0-37.95-4.905-51.649-14.717-13.699-9.626-21.474-22.769-23.325-39.43h31.378c2.406 7.96 7.497 14.346 15.272 19.16 7.96 4.998 17.402 7.497 28.324 7.497 12.773 0 23.047-3.887 30.822-11.663 7.961-7.775 11.941-19.067 11.941-33.877V341.94c-5.369 7.219-12.681 13.328-21.937 18.327-9.071 4.813-19.438 7.219-31.101 7.219-13.328 0-25.546-3.332-36.653-9.996-10.923-6.85-19.623-16.291-26.102-28.324-6.295-12.218-9.442-26.009-9.442-41.374 0-15.365 3.147-28.972 9.442-40.819 6.479-11.848 15.179-21.012 26.102-27.491 11.107-6.664 23.325-9.996 36.653-9.996zm53.038 78.861c0-10.552-2.222-19.715-6.665-27.49-4.258-7.775-9.904-13.699-16.938-17.772-7.035-4.073-14.625-6.109-22.77-6.109s-15.735 2.036-22.77 6.109c-7.035 3.888-12.773 9.719-17.216 17.494-4.258 7.59-6.387 16.661-6.387 27.213s2.129 19.808 6.387 27.768c4.443 7.96 10.181 14.069 17.216 18.327 7.22 4.073 14.81 6.109 22.77 6.109 8.145 0 15.735-2.036 22.77-6.109 7.034-4.073 12.68-9.997 16.938-17.772 4.443-7.96 6.665-17.216 6.665-27.768z" />
    </SVG>
  );
};
