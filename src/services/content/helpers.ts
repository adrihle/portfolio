type SanitizeTranslationsParams<T extends Record<string, Record<string, unknown>>> = {
  text: T;
  fields: (keyof T[string])[];
}
const sanitizedTranslations = <T extends Record<string, Record<string, unknown>>>({ text, fields }: SanitizeTranslationsParams<T>) => {
  return Object.entries(text).reduce((acc, [key, value]) => {
    const props = fields.reduce((ac, fieldName) => {
      return { ...ac, [fieldName as string]: value[fieldName as keyof typeof value] };
    }, {});
    return { ...acc, [key]: props };
  }, {} as T)
};

type Merge<T extends Record<string, Record<string, unknown>>> = SanitizeTranslationsParams<T> & {
  translations: T;
};

const mergeTranslations = <T extends Record<string, Record<string, unknown>>>({ text, translations, fields }: Merge<T>) => {
  return Object.entries(text).reduce((acc, [key, value]) => {
    const props = fields.reduce((ac, fieldName) => {
      return { ...ac, [fieldName]: translations[key][fieldName as string] };
    }, {});
    return { ...acc, [key]: { ...value, ...props } };
  }, {});
};

export { sanitizedTranslations, mergeTranslations };
