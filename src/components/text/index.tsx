import styles from './style.module.scss';
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { TypeAnimation } from "react-type-animation";

type TextProps = {
  size?: 'small' | 'medium' | 'large' | 'default';
  italic?: boolean;
  bold?: boolean;
  color?: 'primary' | 'secondary' | 'highlight' | 'accent';
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Text = ({ children, className, size = 'default', italic, bold, color, ...props }: TextProps) => {
  const styleClass = [
    styles.description,
    styles[size],
    italic ? styles.italic : '',
    bold ? styles.bold : '',
    color ? styles[`color-${color}`] : '',
    className,
  ].join(' ');
  return (
    <div className={styleClass} {...props}>
      {children}
    </div>
  );
};

const Typing = (props: React.ComponentProps<typeof TypeAnimation>) => {
  return (
    <TypeAnimation {...props} />
  );
};

Text.Typing = Typing;

export { Text };
