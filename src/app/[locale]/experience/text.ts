import { Experience } from "@/containers/experience-timeline";

type ExperiencePage = {
  title: string;
  description: string;
  experiences: Record<string, Experience>;
  footer: string;
};

const TEXT: ExperiencePage = {
  title: 'My Professional Journey',
  description: 'A developer who has always been curious about code and passionate about innovation. Here’s a peek into my journey, filled with learning, growth, and a lot of coffee!',
  experiences: {
    mediasmart: {
      company: 'Mediasmart Mobile',
      position: 'Full Stack Developer',
      from: '2022-08-01',
      to: '-',
      description: 'Currently building high-performance ad tech solutions that reach millions of users. It’s like being a magician, but instead of pulling rabbits out of hats, I’m pulling data out of algorithms.',
      location: 'Madrid, Spain',
      logopath: '/npm.svg',
      stack: ['a', 'b', 'c'],
    },
    ufounders: {
      company: 'Ufounders',
      position: 'Full Stack Developer',
      from: '2021-06-01',
      to: '2022-08-01',
      description: 'Worked on creating scalable solutions for startups. Think of me as the Swiss army knife for startups—always adaptable and ready for any challenge!',
      location: 'Madrid, Spain',
      logopath: '/npm.svg',
      stack: [],
    },
    finwave: {
      company: 'Finwave - Iberia & Latam',
      position: 'Full Stack Developer',
      from: '2019-11-01',
      to: '2021-06-01',
      description: 'Built innovative financial solutions for the Iberia and Latam markets. I’d say I was like the architect of the digital finance world… if architects built with code and coffee.',
      location: 'Madrid, Spain',
      logopath: '/npm.svg',
      stack: [],
    },
    basantani: {
      company: 'Basantani Holdings SL',
      position: 'Full Stack Developer',
      from: '2018-05-01',
      to: '2019-11-01',
      description: 'Developed full-stack web solutions while working in the exciting world of e-commerce. It was like designing the perfect shopping cart—without ever needing to worry about it being abandoned!',
      location: 'Madrid, Spain',
      logopath: '/npm.svg',
      stack: [],
    },
    horizon: {
      company: 'Horizon Media Labs',
      position: 'Full Stack Developer',
      from: '2015-10-01',
      to: '2018-05-01',
      description: 'Started my professional journey by building robust solutions for media applications. It was like being part of the backstage crew, making sure everything ran smoothly while the media stars shined.',
      location: 'Gibraltar',
      logopath: '/npm.svg',
      stack: [],
    },
  },
  footer: "Let’s keep coding and creating! 🚀 Follow my journey and let's build something great together.",
};

export { TEXT };
export type { ExperiencePage };
