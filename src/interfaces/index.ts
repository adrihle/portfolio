import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type Locale = string;

type AppLayoutProps<T = object> = {
  children: React.ReactNode;
  params: T;
};

export type { ComponentProps, Locale, AppLayoutProps };
