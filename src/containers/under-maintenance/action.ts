import { Locale } from "@/interfaces";
import { UNDER_MAINTENANCE_TEXT } from "./text"
import { ServiceContent } from "@/services";

const getContent = async ({ locale }: { locale: Locale }) => {
  const texts = await ServiceContent.generatePageTexts({ locale, page: 'under_maintenance', text: UNDER_MAINTENANCE_TEXT });
  return texts;
};

export { getContent };
