import { ProviderLog } from '@/providers';

const logger = new ProviderLog('BIONIC')
const INTERNATIONAL_ALPHABET = /^[\p{L}!?.’,—]+$/u;

const parseBionic = ({ text, percentage = 0.3 }: { text: React.ReactNode, percentage?: number }) => {
  if (typeof text !== 'string') {
    logger.warn('Text should be an string');
    return text;
  }

  const SPACE = ' ';

  return text.split(SPACE).map((word, i) => {
    if (!INTERNATIONAL_ALPHABET.test(word)) return <span key={i}>{word}{SPACE}</span>;

    const bold = word.length < 3 ? word : word.slice(0, Math.ceil(word.length * percentage));
    const normal = word.length >= 3 &&  word.slice(Math.ceil(word.length * percentage));

    return <span key={i}><b>{bold}</b>{normal}{SPACE}</span>
  });
};

export { parseBionic };
