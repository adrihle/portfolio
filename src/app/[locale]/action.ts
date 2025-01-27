import { Locale } from "@/interfaces";
import { ServiceContent } from "@/services";
import { TEXT } from "./text";

const getContent = async ({ locale }: { locale: Locale }) => {
  return ServiceContent.generatePageTexts({ text: TEXT, locale, page: 'home' }) as typeof TEXT;
};

export { getContent };
