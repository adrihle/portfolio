import { ComponentProps } from '@/interfaces';
import styles from './style.module.scss';

type ListProps<T> = ComponentProps & {
  list: T[];
  renderElement: (el: T) => React.ReactNode;
  delay?: number;
};

function List<T>({ list = [], renderElement, delay = 0.3, ...props }: ListProps<T>) {
  if (!renderElement || typeof renderElement !== 'function')
    throw new Error('Should include renderElement prop');

  return (
    <div {...props}>
      {list.map((item, i) => {
        return (
          <div
            key={`render-list-item-${Math.random()}`}
            className={styles.item}
            style={{ animationDelay: `${i * delay}s` }}
          >
            {renderElement(item)}
          </div>
        );
      })}
    </div>
  );
};

export { List };
