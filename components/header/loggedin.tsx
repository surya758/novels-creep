import Link from 'next/link';
import { NextUserResponse } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUserFirstCharacter } from '@/lib/utils';

const LoggedIn = ({ data }: { data: NextUserResponse }) => {
  return (
    <Link href={'/account'}>
      <div className="flex items-center gap-2 justify-start pl-2">
        <Avatar>
          <AvatarImage src={data.user.image || undefined} />
          <AvatarFallback delayMs={600}>{getUserFirstCharacter(data.user)}</AvatarFallback>
        </Avatar>
        <h1 className="text-[#CDCDCD] text-base">{data.user.name}</h1>
      </div>
    </Link>
  );
};

export default LoggedIn;
