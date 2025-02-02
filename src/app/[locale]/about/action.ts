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

export { getContent };
