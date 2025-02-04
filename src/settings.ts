import { ASSETS } from "@/common";
import PROJECT from '../package.json';

const APP_SETTINGS = {
  WEB_TITLE: `Adrian Lopez - v${PROJECT.version}`,
  WEB_DESCRIPTION: 'Portfolio',
  PROFILE_IMAGE: ASSETS.IMAGES.me,
  PROFILE_IMAGE_SIZE: 90,
  DEFAULT_LOCALE: 'en-US',
  EMAIL: 'info@adrilopez.dev',
  SPOTIFY_TRACK_ID: '08mG3Y1vljYA6bvDt4Wqkj',
  CACHE: {
    PAGES_TTL: 60 * 60 * 24 * 1,
  },
  AVAILABLE_ROUTES: {
    HOME: '/',
    EXPERIENCE: '/experience',
    ABOUT: '/about',
    CONTRIBUTIONS: '/contributions',
    PROJECTS: '/projects',
    CERTIFICATE: '/certificate',
    ARTICLES: '/articles',
    KNOWLEDGE: '/knowledge',
  },
  SOCIAL: {
    INSTAGRAM: 'https://www.instagram.com/adrihfly/',
    LINKEDIN: 'https://www.linkedin.com/in/adrihfly/',
    GITHUB: 'https://github.com/adrihle/',
    MAIL: "mailto:info+general@adrilopez.dev?subject=Let's%20Chat%20for%20a%20While",
  },
} as const;

export { APP_SETTINGS };
