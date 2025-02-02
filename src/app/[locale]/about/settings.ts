import { ASSETS } from "@/common";
import { FeatureInfo } from "@/containers";

type AboutPage = {
  title: string;
  intro: string;
  points: {
    title: string;
    e1: string;
    e2: string;
    e3: string;
    e4: string;
    e5: string;
  };
  features: Record<string, FeatureInfo>;
  f1: string;
  f2: string;
};

const ABOUT_PAGE: AboutPage = {
  title: 'Code and Bad Jokes (but Great Software)',
  intro: 'If “About” pages were like a first date, this one would show up with a solid introduction and a meme in hand. This site isn’t just a portfolio—it’s a living lab where I put everything I love about software development into action: automation, optimization, and making technology work for us (not the other way around).',
  points: {
    title: 'Here, you’ll find more than just a list of my projects—you’ll see real examples of how I work:',
    e1: 'Magic keyboard shortcuts: Love fast navigation? Try Shift + arrow keys to switch between pages. Because, honestly, who enjoys unnecessary clicking?',
    e2: 'Dynamic npm integration: The /contributions page updates itself dynamically using my npm account. Why do it manually when automation exists?',
    e3: 'Smart (and cost-effective) translations: This project includes a database for managing translations efficiently, avoiding the need to maintain translation files in future versions and reducing the number of files in the bundle. Translation is important, but overpaying and overloading your app isn’t.',
    e4: 'Modular, elegant, and highly configurable code: You won’t find unnecessary dependencies or bloated code here. The architecture of this project is designed not only to be clean and scalable but also easy to configure and adapt to different needs. Because good code should be flexible, not rigid.',
    e5: 'Bionic Reading boosts reading efficiency by highlighting key parts of words, making text easier to process. It’s simple, customizable, and designed to improve comprehension without extra complexity. Reading should be effortless, not overwhelming.',
  },
  features: {
    shortcuts: {
      title: 'Magic keyboard shortcuts',
      description: 'Love fast navigation? Try Shift + arrow keys to switch between pages. Because, honestly, who enjoys unnecessary clicking?',
      image: ASSETS.IMAGES.shortcut,
    },
    dynamicRelasing: {
      title: 'Releasing automations',
      description: 'This project contain a system to analyze changes about base texts and config to update the features',
    },
    bionic: {
      title: 'Bionic reading',
      description: 'This way boosts reading efficiency by highlighting key parts of words, making text easier to process. It’s simple, customizable, and designed to improve comprehension without extra complexity. Reading should be effortless, not overwhelming.'
    },
    translations: {
      title: 'Smart (and cost-effective) translations',
      description: 'This project includes a storage system for managing translations efficiently, avoiding the need to maintain translation files in future versions and reducing the number of files in the bundle. Translation is important, but overpaying and overloading your app isn’t.',
      image: ASSETS.IMAGES.translatio_tip,
      imagePosition: 'right',
    },
    code: {
      title: 'Modular, elegant, and highly configurable code',
      description: 'You won’t find unnecessary dependencies or bloated code here. The architecture of this project is designed not only to be clean and scalable but also easy to configure and adapt to different needs. Because good code should be flexible, not rigid.',
    }
  },
  f1: 'This project also serves as material for my articles on Concept Architecture. If you’re curious about how I think and how I optimize workflows, this is a functional example that speaks louder than words.',
  f2: 'And yes, the source code is available for you to explore. Because great code isn’t just built to work—it’s built to inspire and invite collaboration. 😉',
} as const;

const TESTING = {
  title: 'Magic keyboard shortcuts',
  description: 'Love fast navigation? Try Shift + arrow keys to switch between pages. Because, honestly, who enjoys unnecessary clicking?',
  image: ASSETS.IMAGES.shortcut,
};

export { ABOUT_PAGE, TESTING };
export type { AboutPage };
