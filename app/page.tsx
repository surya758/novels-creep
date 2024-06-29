import prisma from "@/lib/db";
export default async function Home() {
	const book = await prisma.book.findMany();
	return (
		<main className=''>
			<div>
				{book.map((item, index) => (
					<div key={index}>
						<h1>{item.title}</h1>
						<h2>{item.content}</h2>
					</div>
				))}
			</div>
		</main>
	);
}
