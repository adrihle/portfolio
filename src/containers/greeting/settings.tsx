import { APP_SETTINGS } from "@/settings";

type GreettingSettings = {
  PROFILE_IMAGE: string;
  IMAGE_SIZE: number;
  WELCOME: React.ReactNode | string;
  INTRO: {
    FIXED: React.ReactNode | string;
    SEQUENCE: (string | number)[];
  };
};

export const GREETING_SETTINGS: GreettingSettings = {
  PROFILE_IMAGE: APP_SETTINGS.PROFILE_IMAGE,
  IMAGE_SIZE: APP_SETTINGS.PROFILE_IMAGE_SIZE,
  WELCOME: <>Hi! My name is <strong>Adrian</strong> 👋</>,
  INTRO: {
    FIXED: <>I´m a&nbsp;</>,
    SEQUENCE: [
      'Full Stack Developer',
      1000,
      'Problem-Solver',
      1000,
      'Efficiency Addict',
      1000,
      'Software Engineer',
      1000,
      'Resilient Optimist',
      1000,
      'Dreamer',
      1000
    ],
  },
};
