import { Locale } from "@/interfaces";
import { CERTIFICATION_TEXT } from "./text";

const getContent = async (locale: Locale) => {
  return CERTIFICATION_TEXT;
};

export { getContent };
