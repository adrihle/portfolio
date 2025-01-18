'use client'
import { LOCALES } from "@/common";
import { Widget } from "@/components";
import { useForm } from '@adrihfly/reducer-form';
import { redirect, useParams, usePathname } from "next/navigation";
;
const LocaleSelector = () => {
  const { locale } = useParams();
  const path = usePathname();

  const onSubmit = ({ locale: targetLocale }: Partial<{ locale: string }>) => {
    redirect(path.replace(locale as string, targetLocale as string));
  };

  const { onsubmit, register } = useForm<{ locale: string }>({ onSubmit, initial: { locale: locale as string || 'en-US' } });

  return (
    <Widget>
      <form onSubmit={onsubmit}>
        <select {...register({ name: 'locale' })}>
          {Object.entries(LOCALES).map(([key, value]) => {
            return <option key={key} value={key}>{value}</option>;
          })}
        </select>
        <button type="submit">submit</button>
      </form>
    </Widget>
  );
};

export { LocaleSelector };
