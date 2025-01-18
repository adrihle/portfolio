import { ServiceContent } from '@/services';
import { getContent } from './action';

jest.mock('../../../services/index.ts', () => ({
  ServiceContent: {
    getTexts: jest.fn(),
  },
}));

describe('testing', () => {
  beforeAll(() => {
  })

  it('testing', async () => {
    jest.spyOn(ServiceContent, 'getTexts').mockImplementation(async ({ text }) => text)
    const result = await getContent();
    expect(result).toBeDefined();
  })
})
