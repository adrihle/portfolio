import { LOCALES } from "@/common";
import { APP_SETTINGS } from "@/settings";
import { redirect } from "next/navigation";
import '@/styles/global.scss';
import { AppLayoutProps, Locale } from "@/interfaces";
import { getParams } from "@/utils/getParams";

export default async function LocaleLayout({ children, params }: AppLayoutProps<{ locale: Locale }>) {
  const { locale } = await getParams(params);
  if (!Object.keys(LOCALES).includes(locale)) redirect(`/${APP_SETTINGS.DEFAULT_LOCALE}`);

  return children;
};
