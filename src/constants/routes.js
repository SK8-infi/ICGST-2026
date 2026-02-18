// Route constants for the application
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    TRACKS: '/call-for-papers/tracks',
    GUIDELINES: '/call-for-papers/guidelines',
    CAMERA_READY: '/call-for-papers/camera-ready',
    IMPORTANT_DATES: '/important-dates',
    REGISTRATION: '/registration',
    TRAVEL_VISA: '/travel/visa',
    TRAVEL_VENUE: '/travel/venue',
    TRAVEL_EXPLORE: '/travel/explore-gwalior',
    COMMITTEE: '/committee',
    CONTACT: '/contact',
};

// Navigation items in required order
export const NAV_ITEMS = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Important Dates', path: ROUTES.IMPORTANT_DATES },
    { label: 'Registration', path: ROUTES.REGISTRATION },
    { label: 'Committee', path: ROUTES.COMMITTEE },
    { label: 'Contact Us', path: ROUTES.CONTACT },
];
