import { Locale } from "@/interfaces";
import { ServiceContent } from "@/services";
import { HOME_PAGE, HomePage } from "./settings";

const getContent = async (locale: Locale): Promise<HomePage> => {
  const content = await ServiceContent.generatePageTexts({
    text: HOME_PAGE,
    locale,
    page: 'home',
  });
  return content;
};

export { getContent };
