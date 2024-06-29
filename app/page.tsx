import prisma from '@/app/lib/db';
import { redirect } from 'next/navigation';
import { getAuthenticateUser } from '@/app/actions/user';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function Home() {
  const book = await prisma.book.findMany();
  const user = await getAuthenticateUser();

  if (!user) {
    redirect('/api/auth/login');
  }

  return (
    <main className="">
      <article>
        {/* <LogoutLink>logout</LogoutLink> */}

        {book.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </div>
        ))}
      </article>
    </main>
  );
}
