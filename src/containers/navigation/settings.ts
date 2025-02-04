import { ASSETS } from "@/common";
import { KeyOf, ValueOf } from "@/interfaces";
import { APP_SETTINGS } from "@/settings";

type Routes = Record<KeyOf<typeof APP_SETTINGS.AVAILABLE_ROUTES>, {
  image: ValueOf<typeof ASSETS.ICONS>;
  label: string;
  href: ValueOf<typeof APP_SETTINGS.AVAILABLE_ROUTES>;
  background: string;
  shortcutKey: string;
}>;

const ROUTES: Routes = {
  HOME: {
    image: ASSETS.ICONS.home,
    label: 'Home',
    href: APP_SETTINGS.AVAILABLE_ROUTES.HOME,
    background: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)',
    shortcutKey: 'h',
  },
  EXPERIENCE: {
    image: ASSETS.ICONS.building,
    label: 'Experience',
    href: APP_SETTINGS.AVAILABLE_ROUTES.EXPERIENCE,
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)',
    shortcutKey: 'x',
  },
  ABOUT: {
    image: ASSETS.ICONS.about,
    label: 'About',
    href: APP_SETTINGS.AVAILABLE_ROUTES.ABOUT,
    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    shortcutKey: 'a',
  },
  CONTRIBUTIONS: {
    image: ASSETS.ICONS.package,
    label: 'Libraries',
    href: APP_SETTINGS.AVAILABLE_ROUTES.CONTRIBUTIONS,
    background: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    shortcutKey: 'l',
  },
  PROJECTS: {
    image: ASSETS.ICONS.code,
    label: 'Projects',
    href: APP_SETTINGS.AVAILABLE_ROUTES.PROJECTS,
    background: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)',
    shortcutKey: 'p',
  },
  CERTIFICATE: {
    image: ASSETS.ICONS.certificate,
    label: 'Certificate',
    href: APP_SETTINGS.AVAILABLE_ROUTES.CERTIFICATE,
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    shortcutKey: 'f',
  },
  ARTICLES: {
    image: ASSETS.ICONS.book,
    label: 'Articles',
    href: APP_SETTINGS.AVAILABLE_ROUTES.ARTICLES,
    background: 'linear-gradient(135deg, #d31027 0%, #ea384d 100%)',
    shortcutKey: 'r',
  },
  KNOWLEDGE: {
    image: ASSETS.ICONS.light,
    label: 'Knowledge',
    href: APP_SETTINGS.AVAILABLE_ROUTES.KNOWLEDGE,
    background: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    shortcutKey: 'k',
  },
};

export const NAVIGATION_SETTINGS = {
  ROUTES,
  ICON_SIZE: 60,
} as const;
