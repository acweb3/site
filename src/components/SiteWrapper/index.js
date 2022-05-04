import { RecentWorkSidePanel } from "components/RecentWork/RecentWorkSidePanel";
import { BlurWrapper } from "components/SiteWrapper/BlurWrapper";
import * as S from "components/SiteWrapper/SiteWrapper.styled";
import { useActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";
import React from "react";
import { Helmet } from "react-helmet";

export const SiteWrapper = ({ children }) => {
	const { activeRecentWork } = useActiveRecentWorkContext();

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>aboltc</title>
			</Helmet>
			<S.Global />
			<BlurWrapper>
				<S.Main>{children}</S.Main>
			</BlurWrapper>
			{activeRecentWork && <RecentWorkSidePanel />}
		</>
	);
};
