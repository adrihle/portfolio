'use client'
import { LOCALES } from "@/common";
import { Form, Icon, Text, Widget } from "@/components";
import { useForm } from '@adrihfly/reducer-form';
import { redirect, useParams, usePathname } from "next/navigation";
import styles from './style.module.scss';
import { Locale } from "@/interfaces";
import { APP_SETTINGS } from "@/settings";

type FormValues = {
  locale: Locale;
};

const LocaleSelector = () => {
  const { locale } = useParams<{ locale: Locale }>();
  const path = usePathname();

  const onSubmit = ({ locale: targetLocale }: Partial<{ locale: Locale }>) => {
    if (!targetLocale) return;
    redirect(path.replace(locale, targetLocale));
  };

  const form = useForm<FormValues>({ onSubmit, initial: { locale: locale || APP_SETTINGS.DEFAULT_LOCALE } });

  return (
    <Widget className={styles.container}>
      <Text size="medium" bold style={{ textAlign: 'end' }}>Try AI Translations!</Text>
      <Form {...form} className={styles.form}>
        <Form.Select<FormValues>
          name="locale"
          options={Object.entries(LOCALES).map(([value, label]) => ({ value, label }))}
        />
        <button type="submit" style={{ all: 'unset' }}>
          <Icon src="translation" size={25} />
        </button>
      </Form>
    </Widget>
  );
};

export { LocaleSelector };
