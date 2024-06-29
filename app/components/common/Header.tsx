import { getAuthenticateUser } from '@/app/actions/user';
import { TbMenu2 } from 'react-icons/tb';
import Image from 'next/image';

type Props = {};

const Header = async (props: Props) => {
  await getAuthenticateUser();

  return (
    <div className="h-20 w-full bg-black/90 flex items-center justify-between pl-2 pr-6 border-b-[1.5px] border-cyan-50">
      <Image
        width={100}
        height={100}
        src="/assets/images/logo.png"
        alt="logo"
        className="w-[60px] h-[60x] aspect-cover"
        quality={100}
        priority
      />
      <TbMenu2 size={24} className="" color="white" />
    </div>
  );
};

export default Header;
