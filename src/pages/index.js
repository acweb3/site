import { CallToAction } from "components/CallToAction";
import { Clocks } from "components/Clocks";
import { Marquee } from "components/Marquee";
import { Nav } from "components/Nav";
import { RecentWork } from "components/RecentWork";
import { SiteWrapper } from "components/SiteWrapper";
import { Waves } from "components/Waves";
import { WeAre } from "components/WeAre";
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
			<Marquee
				isMarqueeShowing={isMarqueeShowing}
				close={() => setIsMarqueeShowing(false)}
			/>

			<SiteWrapper isMarqueeShowing={isMarqueeShowing}>
				<Nav />
				<Clocks />
				<Waves gltfPath={publicURL} />
				<WeAre />

				<RecentWork />
				<CallToAction />
			</SiteWrapper>
		</Contexts>
	);
};

export default IndexPage;
