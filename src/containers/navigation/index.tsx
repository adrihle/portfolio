'use client'
import { ShortcutConfig, useShortcuts } from '@adrihfly/shortcuts-hook';
import { AppIcon, Grid } from "@/components"
import styles from './style.module.scss';
import { redirect, useParams } from "next/navigation";

type Routes = Record<string, {
  image: string;
  label: string;
  href: string;
  background: string;
  shortcutKey: string;
}>;

const ICON_SIZE = 60;

const ROUTES: Routes = {
  HOME: {
    image: '/home.svg',
    label: 'Home',
    href: '/',
    background: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)',
    shortcutKey: 'h',
  },
  EXPERIENCE: {
    image: '/experience.svg',
    label: 'Experience',
    href: '/experience',
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)',
    shortcutKey: 'x',
  },
  ABOUT: {
    image: '/about.svg',
    label: 'About',
    href: '/about',
    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    shortcutKey: 'a',
  },
  PROJECTS: {
    image: '/project.svg',
    label: 'Projects',
    href: '/projects',
    background: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)',
    shortcutKey: 'p',
  },
  ARTICLES: {
    image: '/book.svg',
    label: 'Articles',
    href: '/articles',
    background: 'linear-gradient(135deg, #d31027 0%, #ea384d 100%)',
    shortcutKey: 'r',
  },
  CONTRIBUTIONS: {
    image: '/package.svg',
    label: 'Libraries',
    href: '/contributions',
    background: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    shortcutKey: 'l',
  },
};


const Navigation = () => {
  const { locale } = useParams();

  const shortcutConfig: ShortcutConfig = {
    map: Object.values(ROUTES).map(route => {
      return {
        key: route.shortcutKey,
        modifiers: ['shiftKey'],
        action: () => redirect(`/${locale}${route.href}`),
        description: `Navigating to ${route.label}`,
      }
    })
  }

  useShortcuts(shortcutConfig);

  return (
    <Grid className={styles.container} minWidth={ICON_SIZE} gap={15}>
      {Object.values(ROUTES).map((props, i) => (
        <Grid.Item key={i}>
          <AppIcon {...props} size={ICON_SIZE} href={`/${locale}${props.href}`} boldKey={props.shortcutKey} />
        </Grid.Item>
      ))}
    </Grid>
  );
};

export { Navigation };
