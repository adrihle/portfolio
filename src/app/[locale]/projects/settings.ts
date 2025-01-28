import { ASSETS } from "@/common";
import { ProjectInfo } from "@/containers";

type ProjectPage = {
  title: string,
  description: string,
  projects: Record<string, ProjectInfo>;
  footer: string;
};

const PROJECT_PAGE: ProjectPage = {
  title: 'Projects That Empower the Community',
  description: `Explore a selection of projects crafted with passion and precision. Each initiative is designed to solve real-world problems, foster learning, and help different areas of society—all while being open and free for the community. If you're inspired by any of these projects and want to contribute or collaborate, feel free to get in touch. Together, we can make an even bigger impact!`,
  projects: {
    portfolio: {
      name: 'Portfolio',
      short: 'My Personal Showtime of Talent',
      description: `A modern and responsive portfolio to showcase my skills, projects, and journey as a developer. Built with cutting-edge technologies to demonstrate expertise in web development and a passion for clean design.`,
      logoUrl: ASSETS.PROJECTS.portfolio,
      stack: ['typescript', 'react', 'nextjs', 'sass', 'mongo', 'redis', 'openai', 'vercel'],
      repoHref: 'https://github.com/your-profile/portfolio',
      infoHref: 'https://your-portfolio.com',
      background: 'linear-gradient(to bottom, rgba(7, 27, 38, 1) 20%, rgba(7, 27, 38, 0.8) 60%, rgba(7, 27, 38, 0) 100%)',
    },
    npmrunwild: {
      name: 'NPM RUN Wild',
      short: 'A Platform for Full-Stack Education',
      description: `An interactive social media platform where I teach the art of full-stack JavaScript development. From React and Next.js to MongoDB and NestJS, this project combines tutorials, live coding sessions, and community engagement to empower aspiring developers.`,
      logoUrl: ASSETS.PROJECTS.npmrunwild,
      stack: ['typescript', 'nextjs', 'react', 'node', 'express', 'nestjs', 'mongo', 'postgres', 'git', 'aws', 'jest', 'redux'],
      repoHref: 'https://github.com/your-profile/npm-run-wild',
      infoHref: 'https://npmrunwild.com',
      aspectRatio: '18 / 9',
      background: 'linear-gradient(to bottom, rgba(221, 182, 169, 1) 0%, rgba(221, 182, 169, 0.8) 40%, rgba(221, 182, 169, 0) 100%)',
    },
    roccocode: {
      name: 'ROCCO.CODE',
      short: 'My Personal NeoVim Code Editor',
      description: `A highly customized and blazing-fast NeoVim setup designed to optimize productivity and cater to developers who love clean, efficient code editing environments.`,
      logoUrl: ASSETS.PROJECTS.roccocode,
      stack: ['lua', 'neovim', 'bash'],
      repoHref: 'https://github.com/your-profile/roccocode',
      infoHref: 'https://github.com/your-profile/roccocode',
      background: 'linear-gradient(to bottom, rgba(44, 70, 189, 1) 0%, rgba(44, 70, 189, 0.8) 40%, rgba(44, 70, 189, 0) 100%)',
    },

    resq: {
      name: 'RESQ',
      short: 'A Mobile App for Pet Adoptions',
      description: `Helping pets find their forever homes! RESQ is a user-friendly app designed to connect shelters and adopters, streamlining the adoption process and promoting pet welfare.`,
      logoUrl: ASSETS.PROJECTS.resq,
      stack: ['typescript', 'nextjs', 'react', 'nestjs', 'mongo', 'expo'],
      repoHref: 'https://github.com/your-profile/resq',
      infoHref: 'https://resq-app.com',
      background: 'linear-gradient(to bottom, rgba(240, 150, 90, 1) 0%, rgba(240, 150, 90, 0.8) 40%, rgba(240, 150, 90, 0) 100%)',
    },
    mindmapper: {
      name: 'MINDMAPPER',
      short: 'An App to Care for Mental Health',
      description: `A supportive digital space for mental health. MINDMAPPER uses AI-driven insights to help users organize thoughts, track emotions, and practice mindfulness—all in a secure and private way.`,
      logoUrl: ASSETS.PROJECTS.mindmapper,
      stack: ['typescript', 'nextjs', 'react', 'nestjs', 'mongo', 'openai'],
      repoHref: 'https://github.com/your-profile/mindmapper',
      infoHref: 'https://mindmapper.com',
      background: 'linear-gradient(to bottom, rgba(143, 170, 143, 1) 0%, rgba(143, 170, 143, 0.8) 40%, rgba(143, 170, 143, 0) 100%)',
    },
  },
  footer: `These projects represent more than code—they’re a commitment to innovation, inclusivity, and positive societal impact. Open-source and free, because knowledge and solutions should be shared.`,
} as const;

export { PROJECT_PAGE };
export type { ProjectPage };
