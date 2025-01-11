import { DetailedHTMLProps, HTMLAttributes } from "react"
import { TypeAnimation } from "react-type-animation";

type TextProps = {} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const Text = ({ children }: TextProps) => {
  return (
    <p>
      {children}
    </p>
  );
};

const TextType = (props: React.ComponentProps<typeof TypeAnimation>) => {
  return (
    <TypeAnimation {...props} />
  );
};

Text.Type = TextType;

export { Text };
