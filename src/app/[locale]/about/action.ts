import { ServiceContent } from "@/services";
import { ABOUT_TEXT } from "./text";
import { Locale } from "@/interfaces";

const getContent = async ({ locale }: { locale: Locale }) => {
  return ServiceContent.generatePageTexts({ locale, page: 'about', text: ABOUT_TEXT });
};

export { getContent };
