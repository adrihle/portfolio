import { headers } from 'next/headers';

// TODO: REVIEW THIS SHIT, target: obtain destiny url page name when action
export const getPageName = async () => {
  const header = await headers();
  const fullUrl = header.get('referer') || header.get('host');

  const parts = fullUrl?.split('/');
  const pagePath =  parts && parts?.length > 1 ? parts[parts.length - 1] : '/';
  const page = pagePath.split('?')[0].split('#')[0];

  return page;
};

