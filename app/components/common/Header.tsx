'use client';

import Image from 'next/image';
import HamburgerMenu from './hamburger-menu';
import { TbMenu2 } from 'react-icons/tb';
import { useState } from 'react';

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="w-full bg-black/90 flex items-center justify-between pl-2 pr-6 border-b-[1.5px] border-cyan-50">
        <Image
          width={100}
          height={100}
          src="/assets/images/logo.png"
          alt="logo"
          className="w-[80px] h-[80x] aspect-cover"
          quality={100}
          priority
        />
        <TbMenu2
          size={24}
          className=""
          color="white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && <HamburgerMenu />}
    </header>
  );
};

export default Header;
