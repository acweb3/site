import { SignupModal } from "components/SignUpModal";
import { BlurWrapper } from "components/SiteWrapper/BlurWrapper";
import * as S from "components/SiteWrapper/SiteWrapper.styled";
import { useIsSignupContext } from "contexts/IsSignupContext";
import React from "react";

export const SiteWrapper = ({ children }) => {
	const { isSignup } = useIsSignupContext();

	return (
		<>
			<S.Global />
			{isSignup && <SignupModal />}
			<BlurWrapper>
				<S.Main>{children}</S.Main>
			</BlurWrapper>
		</>
	);
};
