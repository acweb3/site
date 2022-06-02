import { SignupModal } from "components/SignUpModal";
import { BlurWrapper } from "components/SiteWrapper/BlurWrapper";
import * as S from "components/SiteWrapper/SiteWrapper.styled";
import React from "react";

export const SiteWrapper = ({ children }) => {
	return (
		<>
			<S.Global />
			<SignupModal />
			<BlurWrapper>
				<S.Main>{children}</S.Main>
			</BlurWrapper>
		</>
	);
};
