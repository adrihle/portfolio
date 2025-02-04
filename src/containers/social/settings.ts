import { APP_SETTINGS } from "@/settings";
import { ASSETS } from "@/common";
import { KeyOf, ValueOf } from "@/interfaces";

type SocialSettings = {
  MIN_COLUMN_WIDTH: number;
  SOCIAL_ICON_WIDTH: number;
  SOCIAL_ICON_OVERLAY: number;
  SOCIAL: Record<KeyOf<typeof APP_SETTINGS.SOCIAL>, {
    href: ValueOf<typeof APP_SETTINGS.SOCIAL>;
    icon: KeyOf<typeof ASSETS.ICONS>;
  }>
};

const SETTINGS: SocialSettings = {
  MIN_COLUMN_WIDTH: 120,
  SOCIAL_ICON_WIDTH: 22,
  SOCIAL_ICON_OVERLAY: 22,
  SOCIAL: {
    INSTAGRAM: {
      href: APP_SETTINGS.SOCIAL.INSTAGRAM,
      icon: 'instagram',
    },
    LINKEDIN: {
      href: APP_SETTINGS.SOCIAL.LINKEDIN,
      icon: 'linkedin',
    },
    GITHUB: {
      href: APP_SETTINGS.SOCIAL.GITHUB,
      icon: 'github',
    },
    MAIL: {
      href: APP_SETTINGS.SOCIAL.MAIL,
      icon: 'mail',
    },
  }
}

export { SETTINGS };
