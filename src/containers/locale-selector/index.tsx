'use client'
import { LOCALES } from "@/common";
import { Icon, Text, Widget } from "@/components";
import { useForm } from '@adrihfly/reducer-form';
import { redirect, useParams, usePathname } from "next/navigation";
import styles from './style.module.scss';
;
const LocaleSelector = () => {
  const { locale } = useParams();
  const path = usePathname();

  const onSubmit = ({ locale: targetLocale }: Partial<{ locale: string }>) => {
    redirect(path.replace(locale as string, targetLocale as string));
  };

  const { onsubmit, register } = useForm<{ locale: string }>({ onSubmit, initial: { locale: locale as string || 'en-US' } });

  return (
    <Widget className={styles.container}>
      <Text size="medium" bold style={{ textAlign: 'end' }}>Try AI Translations!</Text>
      <form onSubmit={onsubmit} className={styles.form}>
        <div className={styles.selectios}>
          <select {...register({ name: 'locale' })}>
            {Object.entries(LOCALES).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" style={{ all: 'unset' }}>
          <Icon src="translation" size={25} />
        </button>
      </form>
    </Widget>
  );
};

export { LocaleSelector };
