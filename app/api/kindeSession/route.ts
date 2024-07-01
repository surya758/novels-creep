import prisma from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) return NextResponse.json({ user: null, error: 'User not found' });

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
        return NextResponse.json({ user: dbUser, error: null });

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

    return NextResponse.json({ user: dbUser, error: null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ user: null, error });
  }
}
