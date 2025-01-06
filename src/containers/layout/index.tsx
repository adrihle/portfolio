import classes from './style.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

export default Layout;

