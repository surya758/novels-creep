import { PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';
import { cn } from '@/lib/utils';

type LayoutProps = PropsWithChildren<{
  className?: React.HTMLAttributes<HTMLElement> | string | undefined;
}>;

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn('flex flex-col min-h-screen', className)}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
