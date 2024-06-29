import { PropsWithChildren } from 'react';

type NavItemProps = PropsWithChildren<{
  title: string;
  href?: string;
}>;

const NavItem = ({ children, title, href }: NavItemProps) => {
  return (
    <a href={href || '#'} className="text-[#CDCDCD] font-normal text-sm py-3">
      {title}
    </a>
  );
};

export default NavItem;
