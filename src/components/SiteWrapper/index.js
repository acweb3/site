import { RecentWorkSidePanel } from "components/RecentWork/RecentWorkSidePanel";
import { BlurWrapper } from "components/SiteWrapper/BlurWrapper";
import * as S from "components/SiteWrapper/SiteWrapper.styled";
import { useActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";
import React from "react";

export const SiteWrapper = ({ children }) => {
	const { activeRecentWork } = useActiveRecentWorkContext();

	return (
		<>
			<S.Global />
			<BlurWrapper>
				<S.Main>{children}</S.Main>
			</BlurWrapper>
			{activeRecentWork && <RecentWorkSidePanel />}
		</>
	);
};
