import { CallToAction } from "components/CallToAction";
import { Clocks } from "components/Clocks";
import { Footer } from "components/Footer";
import { Nav } from "components/Nav";
import { Process } from "components/Process";
import { RecentWork } from "components/RecentWork";
import { SiteWrapper } from "components/SiteWrapper";
import { Team } from "components/Team";
import { Waves } from "components/Waves";
import { WeAre } from "components/WeAre";
import { ShadowWrapper } from "components/ui/ShadowWrapper/ShadowWrapper.styled";
import { Contexts } from "contexts";
import { useModelQuery } from "graphql/queries/useModelQuery";
import { useState } from "react";
import "styles/typography.css";

const IndexPage = () => {
	const {
		allFile: {
			edges: [
				{
					node: { publicURL },
				},
			],
		},
	} = useModelQuery();
	const [isMarqueeShowing, setIsMarqueeShowing] = useState(false);

	return (
		<Contexts>
			<SiteWrapper isMarqueeShowing={isMarqueeShowing}>
				<ShadowWrapper>
					<Nav />
					<Clocks />
					<Waves gltfPath={publicURL} />
					<WeAre />

					<Process />
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
