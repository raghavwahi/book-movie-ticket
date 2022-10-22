export const NAVBAR_LINKS = [
  { linkText: "Home", path: "/" },
  { linkText: "Latest Movies", path: "/latest" },
  { linkText: "Upcoming Movies", path: "/upcomingMovies" },
  { linkText: "Nearby Events", path: "/events" },
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

export const TIMEOUT_PAGE = {
  heading: "Error timeout while requesting for the content you are looking for",
  subHeading1: "This may have happened because of unresponsive server or network issue",
  subHeading2: [
    "Why not try navigating back to the ",
    "home",
    " to being the journey again",
  ],
};

export const ICONS = {
  url: "http://www.w3.org/2000/svg",
  left: "m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z",
  right:
    "m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z",
  star: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z",
};

export const API_DATA = {
  url: "http://3.17.216.66:4000/",
  latest: "latest/",
  upcomingMovies: "upcomingMovies/",
  events: "events/",
};

export const STRINGS = {
  recommendedMovies: "Recommended Movies",
  latestMovies: "Latest Movies",
  upcomingMovies: "Upcoming Movies",
  nearbyEvents: "Nearby Events",
  bookNow: "Book Now",
};

export const PARAMS = {
  pageTimeout: 30000,
};
