import prisma from '@/app/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export const getAuthenticateUser = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) return null;

  let dbUser = await prisma.user.findUnique({
    where: { kindeId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        kindeId: user.id,
        email: user.email || '',
        name:
          user.given_name && user.family_name
            ? `${user.given_name} ${user.family_name}`
            : user.given_name || '',
        image: user.picture || '',
      },
    });
  } else {
    if (
      dbUser.email === user.email &&
      dbUser.name === `${user.given_name} ${user.family_name}` &&
      dbUser.image === user.picture
    )
      return dbUser;

    // Update user info if it has changed
    dbUser = await prisma.user.update({
      where: { kindeId: user.id },
      data: {
        email: user.email || dbUser.email,
        name:
          user.given_name && user.family_name
            ? `${user.given_name} ${user.family_name}`
            : user.given_name || dbUser.name,
        image: user.picture || dbUser.image,
      },
    });
  }

  return dbUser;
};
