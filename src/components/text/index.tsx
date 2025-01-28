'use client'
import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { TypeAnimation } from "react-type-animation";
import styles from './style.module.scss';
import { parseBionic } from "@/utils/parseBionic";

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {
  size?: 'small' | 'medium' | 'large' | 'default';
  italic?: boolean;
  bold?: boolean;
  color?: 'primary' | 'secondary' | 'highlight' | 'accent';
  bionic?: boolean;
};

const Text = ({ children, className, size = 'default', italic, bold, color, bionic, ...props }: TextProps) => {
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
      {bionic ? parseBionic({ text: children }) : children}
    </div>
  );
};

const Typing = (props: React.ComponentProps<typeof TypeAnimation>) => {
  return (
    <TypeAnimation {...props} />
  );
};

const Expandable = ({ text, maxLength = 60, ...props }: TextProps & { text: string, maxLength?: number }) => {
  const [open, setOpen] = useState(false);

  const isOverMaxLength = text.length > maxLength;
  const content = `${(!open && isOverMaxLength) ? text.slice(0, maxLength) : text}${(!open && isOverMaxLength) ? '...' : ''}`;

  return (
    <>
      <Text {...props}>{content}</Text>
      {isOverMaxLength && (
        <button className={styles.button} onClick={() => setOpen(prev => !prev)}>
          {open ? 'Show less' : 'Show more'}
        </button>
      )}
    </>
  );
};

Text.Typing = Typing;
Text.Expandable = Expandable;

export { Text };
