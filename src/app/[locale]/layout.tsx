import { LOCALES } from "@/common";
import { redirect } from "next/navigation";

export default async function LocaleLayout(props: any) {
  const locale = (await props.params).locale;
  if (!Object.keys(LOCALES).includes(locale)) redirect('/en-EN/experience')
  return (
    <>
      {props.children}
    </>
  );
};
