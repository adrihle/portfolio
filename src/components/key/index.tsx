import { DetailedHTMLProps, HTMLAttributes } from 'react';
import './style.css';

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type KeyProps = {
  children: React.ReactNode;
} & Div;

const Key = ({ children, ...props }: KeyProps) => {
  return (
    <div tabIndex={0} role='button' className='keyboard-key' {...props}>
      {children}
    </div>
  )
};

export { Key };
