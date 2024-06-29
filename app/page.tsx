import prisma from '@/app/lib/db';
import Layout from './components/common/Layout';

export default async function Home() {
  const book = await prisma.novel.findMany();

  return (
    <Layout className="m-2">
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
