import { ServiceContent } from '@/services';
import { TEXT } from './text';

const getContent = async ({ locale }: { locale: string }) => {
  const { experiences, ...rest } = TEXT;

  const experience2Translate = Object.entries(experiences).reduce((acc, [key, experience]) => {
    const { position, description, location } = experience;
    return { ...acc, [key]: { position, description, location } };
  }, {});

  const text = { ...rest, experiences: experience2Translate };

  const result = await ServiceContent.generatePageTexts({ text, locale, page: 'experience' });

  const experienceMerged = Object.entries(experiences).reduce((acc, [key, experience]) => {
    const { position, description, location } = result.experiences[key as keyof typeof result.experiences];
    return { ...acc, [key]: { ...experience, position, description, location } };
  }, {})

  return { ...result, experiences: experienceMerged };
};

export { getContent };
