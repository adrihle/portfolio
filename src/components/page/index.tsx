import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ComponentProps } from '@/interfaces';
import { Widget } from "@/components";
import styles from './style.module.scss';
import { parseBionic } from '@/utils/parseBionic';

type HTMLTextProps<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;

const Page = () => {
  throw new Error('Should choose one method of Page, no container applied');
};

const Layout = ({ children, className, ...props }: ComponentProps) => {
  return (
    <Widget height="2000px" className={`${styles.container} ${className}`} {...props}>
      <div className={`${styles.layout} ${className}`} {...props}>
        {children}
      </div>
    </Widget>
  );
};

const Section = ({ children, className, ...props }: ComponentProps) => {
  return (
    <div className={`${styles.section} ${className}`} {...props}>
      {children}
    </div>
  );
};

type HeadingProps = HTMLTextProps<HTMLHeadingElement> & {
  type?: 'h1' | 'h2' | 'h3';
};

const Heading = ({ type = 'h1', children, className: customClassName, ...props }: HeadingProps) => {
  const className = `${styles.heading} ${customClassName}`;

  const types: Record<Required<HeadingProps>['type'], React.ReactElement> = {
    h1: <h1 {...{ className, ...props }} >{children}</h1>,
    h2: <h2 {...{ className, ...props }} >{children}</h2>,
    h3: <h3 {...{ className, ...props }} >{children}</h3>,
  };

  return types[type];
};

type ParagraphProps = HTMLTextProps<HTMLParagraphElement> & {
  highlight?: boolean;
  bionic?: boolean;
};

const Paragraph = ({ children, highlight, bionic, ...props }: ParagraphProps) => {
  const content = bionic ? parseBionic({ text: children }) : children;
  if (highlight) return <mark {...props} className={`${styles.mark} ${props.className}`}>{content}</mark>
  return <p {...props} className={`${styles.paragraph} ${props.className}`}>{content}</p>;
};

type QuoteProps = HTMLTextProps<HTMLQuoteElement> & {
  by: string
};

const Quote = (props: QuoteProps) => {
  return (
    <blockquote {...props} className={`${styles.quote} ${props.className}`}>
      {props.children}
      <span>{'- '}{props.by}</span>
    </blockquote>
  );
};

const Item = ({ children, ...props }: ParagraphProps) => {
  return (
    <Paragraph {...props} className={styles.item}>{children}</Paragraph>
  );
};

Page.Layout = Layout;
Page.Section = Section;
Page.Heading = Heading;
Page.Paragraph = Paragraph;
Page.Quote = Quote;
Page.Item = Item;

export { Page };
