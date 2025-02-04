'use client'
import { ComponentProps } from "@/interfaces";
import { FormProvider, FormProviderProps } from "@adrihfly/reducer-form";
import { Select } from './select';

type FormProps<T> = FormProviderProps<T> & ComponentProps;

function Form<T>({ children, style, className, ...form }: FormProps<T>) {
  const { onsubmit } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={onsubmit} {...{ style, className }}>
        {children}
      </form>
    </FormProvider>
  );
};

Form.Select = Select;

export { Form };
