import prisma from '@/lib/db';
import Layout from '@/components/common/layout';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function Home() {
  const book = await prisma.novel.findMany();

  return (
    <Layout>
      <article>
        {book.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </div>
        ))}
      </article>
    </Layout>
  );
}
