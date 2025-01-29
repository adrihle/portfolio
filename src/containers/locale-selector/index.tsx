'use client'
import { LOCALES } from "@/common";
import { Icon, Text, Widget } from "@/components";
import { useForm } from '@adrihfly/reducer-form';
import { redirect, useParams, usePathname } from "next/navigation";
import styles from './style.module.scss';
import { Locale } from "@/interfaces";
import { APP_SETTINGS } from "@/settings";
;
const LocaleSelector = () => {
  const { locale } = useParams<{ locale: Locale }>();
  const path = usePathname();

  const onSubmit = ({ locale: targetLocale }: Partial<{ locale: Locale }>) => {
    if (!targetLocale) return;
    redirect(path.replace(locale, targetLocale));
  };

  const { onsubmit, register } = useForm<{ locale: Locale }>({ onSubmit, initial: { locale: locale || APP_SETTINGS.DEFAULT_LOCALE } });

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
