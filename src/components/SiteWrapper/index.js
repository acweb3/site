import React from "react";

import { Helmet } from "react-helmet";
import * as S from "./styled";

export const SiteWrapper = ({ isMarqueeShowing, children }) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>a ⚡️ c — we are a web3 catalyst</title>
			</Helmet>
			<S.Global />
			<S.Main isMarqueeShowing={isMarqueeShowing}>{children}</S.Main>
		</>
	);
};
