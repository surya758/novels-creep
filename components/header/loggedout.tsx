import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { usePathname } from 'next/navigation';

const LoggedOut = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center py-1 items-center gap-2">
      <h2 className="text-[#CDCDCD] text-sm font-semibold">
        <LoginLink postLoginRedirectURL={pathname || '/'}>Login</LoginLink>
      </h2>
      <button className="text-black/80 text-sm font-semibold bg-white/90 py-1 px-4 rounded-sm">
        <RegisterLink postLoginRedirectURL={pathname || '/'}>Sign up</RegisterLink>
      </button>
    </div>
  );
};

export default LoggedOut;
