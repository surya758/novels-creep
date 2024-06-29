import { getAuthenticateUser } from '@/app/actions/user';

type Props = {};

const Header = async (props: Props) => {
  await getAuthenticateUser();

  return <div>Header</div>;
};

export default Header;
