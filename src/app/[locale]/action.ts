import { Locale } from "@/interfaces";
import { ServiceContent } from "@/services";
import { TEXT } from "./text";

const getContent = async ({ locale }: { locale: Locale }) => {
  //const content = await ServiceContent.generatePageTexts({ text: TEXT, locale, page: 'home' });

  return TEXT;
};

export { getContent };
