import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],

	pages: {
		signIn: "/auth/signin",
	},

	callbacks: {
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
		async jwt({ token, account, profile }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
				token.id = profile.id;
			}
			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token and user id from a provider.
			session.accessToken = token.accessToken;
			session.user.id = token.id;

			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase();

			session.user.uid = token.sub;

			return session;
		},
	},
};

export default NextAuth(authOptions);
