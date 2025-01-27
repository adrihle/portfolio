import { ServiceContent } from "@/services";
import { ABOUT_PAGE } from "./settings";
import { Locale } from "@/interfaces";

const getContent = async ({ locale }: { locale: Locale }) => {
  const content = await ServiceContent.generatePageTexts({ locale, page: 'about', text: ABOUT_PAGE }) as typeof ABOUT_TEXT;
  return content as typeof ABOUT_PAGE;
};

export { getContent };
