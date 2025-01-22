import { LOCALES } from "@/common";
import { redirect } from "next/navigation";
import '@/styles/global.scss';
import { AppLayoutProps } from "@/interfaces";
import { getParams } from "@/utils";
import { APP_SETTINGS } from "@/settings";

export default async function LocaleLayout({ children, params }: AppLayoutProps<{ locale: string }>) {
  const { locale } = await getParams(params);
  if (!Object.keys(LOCALES).includes(locale)) redirect(`/${APP_SETTINGS.DEFAULT_LOCALE}`);

  return children;
};
