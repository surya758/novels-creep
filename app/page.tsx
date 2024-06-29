import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
	const book = await prisma.book.findMany();
	return (
		<main className=''>
			<article>
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
