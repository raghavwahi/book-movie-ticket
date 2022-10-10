export const NAVBAR_LINKS = [
  { linkText: "Latest Movies", path: "/" },
  { linkText: "Upcoming Movies", path: "/upcoming" },
  { linkText: "Nearby Events", path: "/random" },
];

export const NOT_FOUND_PAGE = {
  heading: "We couldn't find the page you were looking for",
  subHeading1: "You may have mistyped the URL or the page may have moved",
  subHeading2: [
    "Why not try navigating back to the ",
    "home",
    " to find what you are looking for",
  ],
};

export const SLIDER_ICONS = {
  url: "http://www.w3.org/2000/svg",
  left: "M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z",
  right:
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z",
};

export const API_DATA = {
  url: "http://3.17.216.66:4000/",
  latest: "latest/",
  recommended: "upcomingMovies/",
  events: "events/",
};
