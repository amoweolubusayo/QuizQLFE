import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout.tsx";

export default function Home() {
	const items = [
		{ id: 1, name: "test page" },
		{ id: 2, name: "test page" },
		{ id: 3, name: "test page" },
		{ id: 4, name: "test page" },
		{ id: 5, name: "test page" },
		{ id: 6, name: "test page" },
		// More items...
	];
	return (
		<div>
			<Layout title="Home">
				<ul role="list" className="space-y-3">
					{items.map((item) => (
						<li
							key={item.id}
							className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md"
						>
							<p className="text-center">{item?.name}</p>
						</li>
					))}
				</ul>
			</Layout>
		</div>
	);
}
