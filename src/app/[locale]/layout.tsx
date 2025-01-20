import { LOCALES } from "@/common";
import { redirect } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/global.scss';
import { Grid, Page } from "@/components";
import { Greeting, Navigation, LocaleSelector, Social } from "@/containers";
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

const Menu = () => {
  return (
    <Grid minWidth="220px" gap={15}>
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
    </Grid>
  );
};

export default async function LocaleLayout({ children, params }: AppLayoutProps<{ locale: string }>) {
  const { locale } = await getParams(params);
  if (!Object.keys(LOCALES).includes(locale)) redirect(`/${APP_SETTINGS.DEFAULT_LOCALE}`);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Grid minWidth="220px" gap={15}>
          <Grid.Item span={1}>
            <Menu />
          </Grid.Item>
          <Grid.Item span={2}>
            <Page.Container>
              {children}
            </Page.Container>
          </Grid.Item>
        </Grid>
      </body>
    </html>
  );
};
