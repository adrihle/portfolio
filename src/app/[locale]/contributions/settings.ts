import { PackageInfo } from "@/containers";

type ContributionPage = {
  TITLE: string;
  QUOTE: {
    CONTENT: string;
    AUTHOR: string;
  };
  DESCRIPTION: string;
  PACKAGES: Record<string, PackageInfo>;
  CONNECT: string;
};

const CONTRIBUTION_PAGE: ContributionPage = {
  TITLE: 'Open Source, Open Mind',
  QUOTE: {
    CONTENT: '“Good programmers know what to write. Great ones know what to rewrite (and reuse).”',
    AUTHOR: 'Eric S. Raymond',
  },
  DESCRIPTION: `Welcome to my contributions corner! Here, you’ll find libraries, tools, and components I’ve created to make developers’ lives easier. From React to Python, these projects are my little gifts to the coding community—no gift wrap, but plenty of utility.`,
  PACKAGES: {
    reducerForm: {
      "name": "@adrihfly/reducer-form",
      "href": "https://www.npmjs.com/package/@adrihfly/reducer-form",
      "homepage": "https://github.com/adrihle/reducer-form#readme",
      "date": "2025-01-03T15:50:56.875Z",
      "license": "ISC",
      "version": "1.0.0-beta.3",
      "description": "A reducer approach to handle forms in react"
    },
    shortcuts: {
      "name": "@adrihfly/shortcuts-hook",
      "href": "https://www.npmjs.com/package/@adrihfly/shortcuts-hook",
      "homepage": "https://github.com/adrihle/shortcuts-hook#readme",
      "date": "2024-12-28T13:56:48.842Z",
      "license": "ISC",
      "version": "1.1.0-beta.6",
      "description": "A useful react package for manage keyboard shortcuts"
    },
    intersection: {
      "name": "@adrihfly/intersection-hook",
      "href": "https://www.npmjs.com/package/@adrihfly/intersection-hook",
      "homepage": "https://github.com/adrihle/intersection-hook#readme",
      "date": "2024-12-26T20:12:10.567Z",
      "license": "ISC",
      "version": "1.0.1-beta.6",
      "description": "React Hook for Tracking Section Visibility in the Viewport"
    },
    screenDetector: {
      "name": "@adrihfly/screen-detector-hook",
      "href": "https://www.npmjs.com/package/@adrihfly/screen-detector-hook",
      "homepage": "https://github.com/adrihle/screen-detector-hook#readme",
      "date": "2024-12-27T16:20:17.970Z",
      "license": "ISC",
      "version": "1.1.0-beta.4",
      "description": "A useful react hook for handle screen position and size"
    }
  },
  CONNECT: 'Open source is more than code; it’s collaboration, passion, and the joy of sharing. Thank you for exploring my contributions. Have feedback or ideas? lets connect!',
} as const;

export { CONTRIBUTION_PAGE };
export type { ContributionPage };
