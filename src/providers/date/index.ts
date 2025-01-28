/* eslint-disable @typescript-eslint/no-explicit-any */
import { differenceInDays, formatDistanceToNow, isBefore as fnsIsBefore, format as fnsFormat } from "date-fns";

const fromNow = (date: string) => {
  return formatDistanceToNow(date, {addSuffix: true });
};

const diffDays = ({ from, to }: { from: string, to: any }): number => {
  return differenceInDays(to, from);
};

const diffDaysToNow = (from: string): number => {
  return differenceInDays(new Date(), from);
};

const format = ({ date, format }: { date: string, format: string }) => {
  return fnsFormat(date, format);
};

const isBefore = fnsIsBefore;

const ProviderDate = {
  fromNow,
  diffDays,
  diffDaysToNow,
  isBefore,
  format,
};

export { ProviderDate };
