import React, { useEffect, useState } from 'react';
import { User } from '@prisma/client';
import { useQuery } from 'react-query';
import { getUser } from '@/data/user';
import Divider from './divider';
import NavItem from '../home/nav-item';

const HamburgerMenu = () => {
  const { data: user, isLoading } = useQuery<User>('getUser', getUser);

  return (
    <div className="bg-black/90">
      <nav className="flex flex-col items-center justify-center h-full">
        <NavItem title="Library" href="" />
        <Divider />
        <NavItem title="Bookmarks" href="" />
        <Divider />
        <NavItem title="Contact" href="" />
        <Divider />
        <NavItem title="Login" href="" />
      </nav>
    </div>
  );
};

export default HamburgerMenu;
