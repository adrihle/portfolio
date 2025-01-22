type Routes = Record<string, {
  image: string;
  label: string;
  href: string;
  background: string;
  shortcutKey: string;
}>;

const ROUTES: Routes = {
  HOME: {
    image: '/home.svg',
    label: 'Home',
    href: '/',
    background: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)',
    shortcutKey: 'h',
  },
  EXPERIENCE: {
    image: '/experience.svg',
    label: 'Experience',
    href: '/experience',
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)',
    shortcutKey: 'x',
  },
  ABOUT: {
    image: '/about.svg',
    label: 'About',
    href: '/about',
    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    shortcutKey: 'a',
  },
  CONTRIBUTIONS: {
    image: '/package.svg',
    label: 'Libraries',
    href: '/contributions',
    background: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    shortcutKey: 'l',
  },
  PROJECTS: {
    image: '/project.svg',
    label: 'Projects',
    href: '/projects',
    background: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)',
    shortcutKey: 'p',
  },
  ARTICLES: {
    image: '/book.svg',
    label: 'Articles',
    href: '/articles',
    background: 'linear-gradient(135deg, #d31027 0%, #ea384d 100%)',
    shortcutKey: 'r',
  },
  KNOWLEDGE: {
    image: '/knowledge.svg',
    label: 'Knowledge',
    href: '/knowledge',
    background: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    shortcutKey: 'k',
  },
  CERTIFICATE: {
    image: '/certificate.svg',
    label: 'Certificate',
    href: '/certificate',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    shortcutKey: 'f',
  },
};

export const NAVIGATION_SETTINGS = {
  ROUTES,
  ICON_SIZE: 60,
} as const;
