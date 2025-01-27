const APP_SETTINGS = {
  DEFAULT_LOCALE: 'en-US',
  CACHE: {
    PAGES: {
      TTL: 60 * 60 * 24 * 1,
    },
  },
} as const;

export { APP_SETTINGS };
