import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Header from "@/components/Header";

export default function SignIn({ providers }) {
	return (
		<>
			<Header />

			<div className="flex flex-col items-center justify-center min-h-screen px-14 text-center">
				<img
					className="w-80"
					src="https://links.papareact.com/ocw"
					alt=""
				/>
				<p className="font-xs italic">
					This is not a REAL app, it is built for educational
					purposes only
				</p>

				<div className="mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 bg-blue-500 rounded-lg text-white"
								onClick={() =>
									signIn(provider.id, {
										callbackUrl: "/",
									})
								}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	const session = await getServerSession(
		context.req,
		context.res,
		authOptions
	);

	if (session) {
		return { redirect: { destination: "/" } };
	}
	const providers = await getProviders();

	return {
		props: { providers: providers ?? [] },
	};
}
