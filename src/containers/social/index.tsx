
import { Grid, Icon, Widget } from '@/components';
import styles from './style.module.scss';
import { SETTINGS } from './settings';
import { IconProps } from '@/components/icon';

const Social = () => {
  const overlay = SETTINGS.SOCIAL_ICON_WIDTH + SETTINGS.SOCIAL_ICON_OVERLAY;
  return (
    <Widget className={styles.social}>
      <Grid minWidth={overlay} gap={10} className={styles.socialGrid}>
        {Object.values(SETTINGS.SOCIAL).map(({ href, icon }) => {
          return (
            <Grid.Item key={href} className={styles.socialIcon} style={{ width: `${overlay}px`, height: `${overlay}px` }}>
              <Icon.Link
                src={icon as IconProps['src']}
                size={SETTINGS.SOCIAL_ICON_WIDTH}
                href={href}
                className={styles.socialIconImage}
                style={{ filter: 'brightness(1.2) contrast(90%)' }}
              />
            </Grid.Item>
          )
        })}
      </Grid>
    </Widget>
  );
};

export { Social };
