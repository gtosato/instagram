import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="bg-gray-50 h-screen overflow-y-scroll">
			<Header />
			<Feed />
			<Modal />
		</main>
	);
}
