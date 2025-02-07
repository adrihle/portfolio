import { HTMLElementProps } from "@/interfaces";

type ButtonProps = HTMLElementProps<HTMLButtonElement> & {
  disableEnter?: boolean;
  onClick?: () => Promise<void> | void;
  form?: boolean;
};

const Button = ({ onClick, form = false, children, ...props }: ButtonProps) => {

  const click = async (data: FormData) => {
    const submitSource = data.get('submittedFrom');
    if (submitSource !== 'submit-button' && form) return;
    if(!form && onClick) await onClick();
  };

  return (
    <form action={click}>
      <button {...props} type="submit">
        {children}
      </button>
    </form>
  );
};

export { Button };
