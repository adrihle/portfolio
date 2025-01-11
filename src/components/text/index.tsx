import styles from './style.module.scss';
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { TypeAnimation } from "react-type-animation";

type TextProps = {} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <p className={`${styles.description} ${className}`} {...props}>
      {children}
    </p>
  );
};

const TextType = (props: React.ComponentProps<typeof TypeAnimation>) => {
  return (
    <TypeAnimation {...props} />
  );
};

const Quote = (props: TextProps & { by: string }) => {
  return (
    <blockquote {...props as any} className={`${styles.quote} ${props.className}`}>
      {props.children}
      <span>{'- '}{props.by}</span>
    </blockquote>
  );
};

const Title = (props: TextProps) => {
  return (
    <h1 {...props} className={`${styles.title} ${props.className}`}>{props.children}</h1>
  );
};

Text.Type = TextType;
Text.Quote = Quote;
Text.Title = Title;

export { Text };
