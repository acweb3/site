import { CallToAction } from "components/CallToAction";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Nav } from "components/Nav";
import { Process } from "components/Process";
import { RecentWork } from "components/RecentWork";
import { SiteWrapper } from "components/SiteWrapper";
import { Team } from "components/Team";
import { WeAre } from "components/WeAre";
import { Contexts } from "contexts";
import "styles/typography.css";

const IndexPage = () => {
	return (
		<Contexts>
			<SiteWrapper>
				<Nav />
				<Header />
				<WeAre />
				<Process />
				<CallToAction />
				<RecentWork />
				<Team />
				<Footer />
			</SiteWrapper>
		</Contexts>
	);
};

export default IndexPage;
