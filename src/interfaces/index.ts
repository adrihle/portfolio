import { LOCALES } from "@/common";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type Locale = keyof typeof LOCALES;

type AppLayoutProps<T = object> = {
  children: React.ReactNode;
  params: Promise<T>;
};

type LocalePageProps = Omit<AppLayoutProps<{ locale: Locale }>, 'children'>;

export type { ComponentProps, Locale, AppLayoutProps, LocalePageProps };
