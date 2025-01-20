import { ServiceContent } from '@/services';
import { getContent } from './action';

jest.mock('../../../services/index.ts', () => ({
  ServiceContent: {
    generatePageTexts: jest.fn(),
  },
}));

describe('testing', () => {
  beforeAll(() => {
    jest.spyOn(ServiceContent, 'generatePageTexts').mockImplementation(async ({ text }) => text)
  })

  it('testing', async () => {
    const result = await getContent({ locale: 'es-ES' });
    const { title, description, experiences, footer } = result;
    const isDefinedNecessary = [title, description, experiences, footer].every((a) => Boolean(a));
    expect(isDefinedNecessary).toBeTruthy();
  })
})
