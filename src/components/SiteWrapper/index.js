import * as S from "components/SiteWrapper/SiteWrapper.styled";
import React from "react";
import { Helmet } from "react-helmet";

export const SiteWrapper = ({ isMarqueeShowing, children }) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>aboltc</title>
			</Helmet>
			<S.Global />
			<S.Main isMarqueeShowing={isMarqueeShowing}>{children}</S.Main>
		</>
	);
};
