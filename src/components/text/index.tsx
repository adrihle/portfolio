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
    <p className={styleClass} {...props}>
      {children}
    </p>
  );
};

const TextType = (props: React.ComponentProps<typeof TypeAnimation>) => {
  return (
    <TypeAnimation {...props} />
  );
};

type QuoteProps = {
  by: string
} &  DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;

const Quote = (props: QuoteProps) => {
  return (
    <blockquote {...props} className={`${styles.quote} ${props.className}`}>
      {props.children}
      <span>{'- '}{props.by}</span>
    </blockquote>
  );
};

type TitleProps = TextProps & {
  type?: 'h1' | 'h2' | 'h3';
};

const Title = ({ type = 'h1', ...props }: TitleProps) => {

  const types: Record<Required<TitleProps>['type'], React.ReactElement> = {
    h1: <h1 {...props} className={`${styles.title} ${props.className}`}>{props.children}</h1>,
    h2: <h2 {...props} className={`${styles.title} ${props.className}`}>{props.children}</h2>,
    h3: <h3 {...props} className={`${styles.title} ${props.className}`}>{props.children}</h3>,
  };

  return types[type];
};

Text.Type = TextType;
Text.Quote = Quote;
Text.Title = Title;

export { Text };
