import { LOCALES } from "@/common";
import { redirect } from "next/navigation";
import '@/styles/global.scss';
import { LocalePageProps } from "@/interfaces";
import { getParams } from "@/utils/getParams";
import { APP_SETTINGS } from "@/settings";

export default async function LocaleLayout({ children, params }: LocalePageProps) {
  const { locale } = await getParams(params);
  if (!Object.keys(LOCALES).includes(locale)) redirect(`/${APP_SETTINGS.DEFAULT_LOCALE}`);

  return children;
};
