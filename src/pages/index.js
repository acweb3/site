import React, { useState } from "react";

import { Body } from "../components/Body";
import { Deal } from "../components/Deal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Marquee } from "../components/Marquee";
import { Nav } from "../components/Nav";
import { Popups } from "../components/Popups";
import { SiteWrapper } from "../components/SiteWrapper";
import { Work } from "../components/Work";

const IndexPage = () => {
	const [isMarqueeShowing, setIsMarqueeShowing] = useState(false);

	return (
		<>
			<Marquee
				isMarqueeShowing={isMarqueeShowing}
				close={() => setIsMarqueeShowing(false)}
			/>
			<SiteWrapper isMarqueeShowing={isMarqueeShowing}>
				<Nav />
				<Header />
				<Body />
				<Popups />
				<Deal />
				<Work />
				<Footer />
			</SiteWrapper>
		</>
	);
};

export default IndexPage;
