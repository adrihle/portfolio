'use client'
import { ShortcutConfig, useShortcuts } from '@adrihfly/shortcuts-hook';
import { Grid, Icon } from "@/components"
import styles from './style.module.scss';
import { redirect, useParams } from "next/navigation";
import { NAVIGATION_SETTINGS } from './settings';

const { ROUTES, ICON_SIZE } = NAVIGATION_SETTINGS;

const Navigation = () => {
  const { locale } = useParams();

  const { apps, map } = Object.values(ROUTES)
    .reduce((acc, route, i) => {
      return {
        apps: [...acc.apps, (
          <Grid.Item key={i}>
            <Icon.App {...route} size={ICON_SIZE} href={`/${locale}${route.href}`} boldKey={route.shortcutKey} />
          </Grid.Item>
        )],
        map: [...acc.map, {
          key: route.shortcutKey,
          // FIX: review this shitty senseless cast
          modifiers: ['shiftKey' as ShortcutConfig['map'][number]['modifiers'][number]],
          action: () => redirect(`/${locale}${route.href}`),
          description: `Navigating to ${route.label}`,
        }],
      };
    }, { apps: [], map: [] } as { apps: React.ReactNode[], map: ShortcutConfig['map'] });


  useShortcuts({ map });

  return (
    <Grid className={styles.container} minWidth={ICON_SIZE} gap={15} >{apps}</Grid >
  );
};

export { Navigation };
