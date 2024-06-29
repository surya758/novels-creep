'use client';

import Image from 'next/image';
import HamburgerMenu from './hamburger-menu';
import { TbMenu2 } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import Icon from './icon';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div
        className={cn(
          'w-full bg-black/90 flex items-center justify-between pl-2 pr-6 border-cyan-100',
          {
            'border-b-[1.5px]': !isMenuOpen,
          }
        )}
      >
        <Image
          width={100}
          height={100}
          src="/assets/images/logo.png"
          alt="logo"
          className="w-[80px] h-[80x] aspect-cover"
          quality={100}
          priority
        />
        {!isMenuOpen ? (
          <Icon icon={TbMenu2} onClick={() => setIsMenuOpen(true)} />
        ) : (
          <Icon icon={RxCross2} onClick={() => setIsMenuOpen(false)} />
        )}
      </div>

      {isMenuOpen && <HamburgerMenu />}
    </header>
  );
};

export default Header;
