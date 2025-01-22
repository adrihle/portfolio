import { LOCALES } from "@/common";
import { redirect } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/global.scss';
import { Grid } from "@/components";
import { Greeting, Navigation, LocaleSelector, Social, Bso } from "@/containers";
import styles from './style.module.scss';
import { AppLayoutProps } from "@/interfaces";
import { getParams } from "@/utils";
import { APP_SETTINGS } from "@/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LAYOUT_SETTINGS = {
  MIN_WIDTH: '220px',
  GAP: 10,
} as const;

const Menu = () => {
  return (
    <Grid minWidth={LAYOUT_SETTINGS.MIN_WIDTH} gap={LAYOUT_SETTINGS.GAP}>
      <Grid.Item className={styles.greeting}>
        <Greeting />
      </Grid.Item>
      <Grid.Item className={styles.social}>
        <Social />
      </Grid.Item>
      <Grid.Item className={styles.navigation}>
        <Navigation />
      </Grid.Item>
      <Grid.Item className={styles.locale}>
        <LocaleSelector />
      </Grid.Item>
      <Grid.Item className={styles.bso}>
        <Bso />
      </Grid.Item>
    </Grid>
  );
};

export default async function LocaleLayout({ children, params }: AppLayoutProps<{ locale: string }>) {
  const { locale } = await getParams(params);
  if (!Object.keys(LOCALES).includes(locale)) redirect(`/${APP_SETTINGS.DEFAULT_LOCALE}`);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Grid minWidth={LAYOUT_SETTINGS.MIN_WIDTH} className={styles.grid}>
          <Grid.Item span={1} className={styles.grid_menu}>
            <Menu />
            <div className={styles.bso_bottom}>
              <Bso />
            </div>
          </Grid.Item>
          <Grid.Item span={2}>
            {children}
          </Grid.Item>
        </Grid>
      </body>
    </html>
  );
};
