import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';
import { cn } from '@/lib/utils';

type LayoutProps = PropsWithChildren<{
  className?: React.HTMLAttributes<HTMLElement> | string | undefined;
}>;

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className={cn('', className)}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
