import { ServiceContent } from "@/services";
import { ABOUT_PAGE, AboutPage } from "./settings";
import { Locale } from "@/interfaces";

const getContent = async (locale: Locale): Promise<AboutPage> => {
  const content = await ServiceContent.generatePageTexts({
    locale,
    page: 'about',
    text: ABOUT_PAGE
  });
  return content;
};

export { getContent };
