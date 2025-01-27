import { ServiceContent } from '@/services';
import { EXPERIENCE_PAGE } from './settings';
import { Locale } from '@/interfaces';

const getContent = async ({ locale }: { locale: Locale }) => {
  const { experiences, ...rest } = EXPERIENCE_PAGE;

  const sanitized = ServiceContent.sanitizedTranslations({
    text: experiences,
    fields: ['description', 'position', 'location'],
  });

  const text = { ...rest, experiences: sanitized };

  const result = await ServiceContent.generatePageTexts({ text, locale, page: 'experience' });

  const merged = ServiceContent.mergeTranslations({
    text: experiences,
    translations: result.experiences as (typeof EXPERIENCE_PAGE)['experiences'],
    fields: ['description', 'position', 'location'],
  });

  return { ...result, experiences: merged }  as typeof EXPERIENCE_PAGE;
};

export { getContent };
