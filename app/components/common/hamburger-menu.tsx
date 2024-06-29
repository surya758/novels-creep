import React, { useEffect, useState } from 'react';
import { User } from '@prisma/client';
import { useQuery } from 'react-query';
import { getUser } from '@/data/user';

type Props = {};

const HamburgerMenu = (props: Props) => {
  const { data: user, isLoading, isError } = useQuery<User>('user', getUser);

  return (
    <div className="bg-black/90">
      <nav className="flex flex-col items-center justify-center h-full">
        <a href="#" className="text-white/50 font-semibold text-lg">
          Home
        </a>
        <a href="#" className="text-white/50 font-semibold text-lg">
          About
        </a>
        <a href="#" className="text-white/50 font-semibold text-lg">
          Contact
        </a>
        <a href="#" className="text-white/50 font-semibold text-lg">
          Login
        </a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
