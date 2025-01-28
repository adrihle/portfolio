import { Locale } from "@/interfaces";
import { UNDER_MAINTENANCE_PAGE } from "./settings"
import { ServiceContent } from "@/services";

const getContent = async ({ locale }: { locale: Locale }) => {
  const content = await ServiceContent.generatePageTexts({
    locale,
    page: 'under_maintenance',
    text: UNDER_MAINTENANCE_PAGE,
  });
  return content as typeof UNDER_MAINTENANCE_PAGE;
};

export { getContent };
