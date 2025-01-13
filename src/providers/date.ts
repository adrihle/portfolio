import { formatDistanceToNow } from "date-fns";

const fromNow = (date: string) => {
  return formatDistanceToNow(date, {addSuffix: true });
};

const ProviderDate = {
  fromNow,
};

export { ProviderDate };
