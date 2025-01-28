import { ASSETS, TECH_STACK } from "@/common";

export const ICON_SETTINGS = {
  LOCAL_ICONS: {
    web: ASSETS.ICONS.globe,
    github: ASSETS.ICONS.github,
    instagram: ASSETS.ICONS.instagram,
    linkedin: ASSETS.ICONS.linkedin,
    mail: ASSETS.ICONS.mail,
    npm: ASSETS.ICONS.npm,
    translation: ASSETS.ICONS.translation,
    location: ASSETS.ICONS.pin,
  },
  STACK_ICONS: TECH_STACK,
  LOCAL_STACK_ICONS: {
    java: ASSETS.ICONS.java,
  },
  DECOLORED_STACK_ICON: [
    'express',
    'nextjs',
    'github',
    'pandas',
    'aws',
    'angular',
    'applepay',
    'openai',
    'lua',
    'expo',
  ] as (keyof typeof TECH_STACK)[],
  DEFAULT_COLOR: 'e5e5e5',
} as const;
