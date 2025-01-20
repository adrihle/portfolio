import { TECH_STACK } from "@/common";

export const ICON_SETTINGS = {
  LOCAL_ICONS: {
    web: '/web.svg',
    github: '/social/github.svg',
    instagram: '/social/instagram.svg',
    linkedin: '/social/linkedin.svg',
    mail: '/social/mail.svg',
    npm: '/npm.svg',
    translation: '/translation.svg',
    location: '/pin.svg',
  },
  STACK_ICONS: TECH_STACK,
  LOCAL_STACK_ICONS: {
    java: '/java.svg',
  },
  DECOLORED_STACK_ICON: [
    'express',
    'nextjs',
    'github',
    'pandas',
    'aws',
    'angular',
    'applepay',
  ] as (keyof typeof TECH_STACK)[],
  DEFAULT_COLOR: 'e5e5e5',
} as const;
