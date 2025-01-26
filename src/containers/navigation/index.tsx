'use client'
import { ShortcutConfig, useShortcuts } from '@adrihfly/shortcuts-hook';
import { Grid, Icon } from "@/components"
import styles from './style.module.scss';
import { redirect, useParams } from "next/navigation";
import { NAVIGATION_SETTINGS } from './settings';

const { ROUTES, ICON_SIZE } = NAVIGATION_SETTINGS;

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
    }),
  }

  useShortcuts(shortcutConfig);

  return (
    <Grid className={styles.container} minWidth={ICON_SIZE} gap={15}>
      {Object.values(ROUTES).map((props, i) => (
        <Grid.Item key={i}>
          <Icon.App {...props} size={ICON_SIZE} href={`/${locale}${props.href}`} boldKey={props.shortcutKey} />
        </Grid.Item>
      ))}
    </Grid>
  );
};

export { Navigation };
