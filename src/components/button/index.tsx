import { HTMLElementProps } from "@/interfaces";

type ButtonProps = HTMLElementProps<HTMLButtonElement> & {
  onClick: () => Promise<void> | void;
};

const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
  <form action={onClick}>
      <button {...props} type="submit" >
        {children}
      </button>
    </form>
  );
};

export { Button };
