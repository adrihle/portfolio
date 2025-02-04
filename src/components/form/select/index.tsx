import { useFormContext } from "@adrihfly/reducer-form";
import { ComponentProps } from "@/interfaces";
import styles from './style.module.scss';

type SelectProps<T> = ComponentProps & {
  name: keyof T,
  options: { value: string, label: string }[];
};

function Select<T>({ name, options = [], style, className }: SelectProps<T>) {
  const { register } = useFormContext<T>();
  return (
    <div className={styles.select}>
      <select {...register({ name })} style={style} className={className}>
        {options.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
      </select>
    </div>
  );
};

export { Select };
export type { SelectProps };
