import { CallToAction } from "components/CallToAction";
import { FAQ } from "components/FAQ";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Nav } from "components/Nav";
import { Process } from "components/Process";
import { RecentWork } from "components/RecentWork";
import { SiteWrapper } from "components/SiteWrapper";
import { Team } from "components/Team";
import { Toasts } from "components/Toasts";
import { WeAre } from "components/WeAre";
import { config } from "config";
import { Contexts } from "contexts";
import { Helmet } from "react-helmet";
import "styles/typography.css";

const IndexPage = ({ pageContext: { thumbnail } }) => {
	return (
		<>
			<Helmet
				htmlAttributes={{
					lang: "en",
				}}
			>
				{config.nodeEnv === "development" && (
					<meta name="robots" content="noindex" />
				)}
				<meta charSet="utf-8" />
				<meta
					content="width=device-width, initial-scale=1.0"
					name="viewport"
				/>
				<title>aboltc</title>
				<meta name="title" content="aboltc" />
				<meta
					name="description"
					content="we're a full-service web3 studio. we build discords,
					write smart contracts, and develop websites for nft
					projects."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="aboltc" />
				<meta property="og:url" content="www.aboltc.com" />
				<meta property="og:site_name" content="www.aboltc.com" />
				<meta
					property="og:description"
					content="we're a full-service web3 studio. we build discords,
					write smart contracts, and develop websites for nft
					projects."
				/>
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="aboltc" />
				<meta property="og:image" content={thumbnail} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@aboltc_" />
				<meta name="twitter:site" content="@aboltc_" />
				<meta property="twitter:image" content={thumbnail} />
				<meta property="twitter:image:alt" content="" />
				<link rel="canonical" href="https://www.aboltc.com" />
			</Helmet>
			<Contexts>
				<Toasts />
				<SiteWrapper>
					<Nav />
					<Header />
					<WeAre />
					<Process />
					<RecentWork />
					<Team />
					<CallToAction />
					<FAQ />
					<Footer />
				</SiteWrapper>
			</Contexts>
		</>
	);
};

export default IndexPage;
