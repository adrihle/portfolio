import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/global.scss';
import { Grid, Page } from "@/components";
import { Greeting, Navigation, LocaleSelector, Social } from "@/containers";
import styles from './style.module.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrián López - npm run van",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }: any) {
  const locale = (await params).locale;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Grid minWidth="220px" gap={15}>
          <Grid.Item span={1}>
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
}
