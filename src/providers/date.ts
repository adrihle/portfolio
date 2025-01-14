import { differenceInDays, formatDistanceToNow, isBefore as fnsIsBefore } from "date-fns";

const fromNow = (date: string) => {
  return formatDistanceToNow(date, {addSuffix: true });
};

const diffDays = ({ from, to }: { from: string, to: any }): number => {
  return differenceInDays(to, from);
};

const diffDaysToNow = (from: string): number => {
  return differenceInDays(new Date(), from);
};

const isBefore = fnsIsBefore;

const ProviderDate = {
  fromNow,
  diffDays,
  diffDaysToNow,
  isBefore,
};

export { ProviderDate };
