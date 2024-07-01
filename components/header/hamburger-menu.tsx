import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '@/data/user';
import Divider from '../common/divider';
import NavItem from '../home/nav-item';
import { NextUserResponse } from '@/lib/types';
import If from '../common/if';
import { Skeleton } from '@/components/ui/skeleton';
import LoggedIn from './loggedin';
import LoggedOut from './loggedout';

const HamburgerMenu = () => {
  const { data, isLoading } = useQuery<NextUserResponse>('getUser', getUser, {
    staleTime: 10 * 1000,
  });

  return (
    <div className="bg-black/90">
      <nav className="flex flex-col items-center h-full">
        <If
          condition={!isLoading}
          otherwise={<Skeleton className="w-[200px] h-[30px] rounded-full my-3" />}
        >
          <section className="py-2 px-1.5 w-full">
            {data?.user ? <LoggedIn data={data} /> : <LoggedOut />}
          </section>
        </If>

        <Divider />
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
