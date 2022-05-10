import { CallToAction } from "components/CallToAction";
import { Clocks } from "components/Clocks";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Nav } from "components/Nav";
import { Process } from "components/Process";
import { RecentWork } from "components/RecentWork";
import { SiteWrapper } from "components/SiteWrapper";
import { Team } from "components/Team";
import { ValueProp } from "components/ValueProp";
import { WeAre } from "components/WeAre";
import { ShadowWrapper } from "components/ui/ShadowWrapper/ShadowWrapper.styled";
import { Contexts } from "contexts";
import "styles/typography.css";

const IndexPage = () => {
	return (
		<Contexts>
			<SiteWrapper>
				<ShadowWrapper>
					<Nav />
					<Header />
					<Clocks />
					<ValueProp />
					<Process />
					<WeAre />
					<CallToAction />
					<RecentWork />
					<Team />
				</ShadowWrapper>
			</SiteWrapper>
			<Footer />
		</Contexts>
	);
};

export default IndexPage;
