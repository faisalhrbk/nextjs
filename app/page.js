import Link from "next/link";

export default function Home() {
	return (
		<>
			hello world
			<br />
			{/* <Link href="/properties">Go to Properties</Link> */}
			<Link
				href={{
					pathname: "/properties",
					query: { name: "test", id: "123" },
				}}>
				Go to properties
			</Link>
		</>
	);
}
