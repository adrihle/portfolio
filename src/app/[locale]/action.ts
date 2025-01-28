import { Locale } from "@/interfaces";
import { ServiceContent } from "@/services";
import { HOME_PAGE } from "./settings";

const getContent = async ({ locale }: { locale: Locale }) => {
  const content = await ServiceContent.generatePageTexts({
    text: HOME_PAGE,
    locale,
    page: 'home',
  });
  return content as typeof HOME_PAGE;
};

export { getContent };
