import prisma from '@/lib/db';
import Layout from './components/common/Layout';

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
