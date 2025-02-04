/* eslint-disable @typescript-eslint/no-unused-vars */
import { ServiceContent } from "@/services";
import { ABOUT_PAGE, AboutPage } from "./settings";
import { Locale } from "@/interfaces";

const getContent = async (locale: Locale): Promise<AboutPage> => {
  const { features, ...rest } = ABOUT_PAGE;
  const content = await ServiceContent.generatePageTexts({
    locale,
    page: 'about',
    text: rest
  });
  return { ...content, features };
};

const updateContent = async (locale: Locale) => {
  const filePath = './src/app/[locale]/about/settings.ts';
  const { features, ...rest } = ABOUT_PAGE;
  await ServiceContent.updatePageTexts({ page: 'about', locale, text: rest, filePath });
}

export { getContent, updateContent };
