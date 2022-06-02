import { useWindowSize } from "common/hooks/useWindowSize";
import * as S from "components/SiteWrapper/BlurWrapper/BlurWrapper.styled";
import { useIsSignupContext } from "contexts/IsSignupContext";
import React, { useEffect, useRef, useState } from "react";

export const BlurWrapper = ({ children }) => {
	const { isSignup } = useIsSignupContext();
	const { isMobile } = useWindowSize();
	const [lock, setLock] = useState();
	const lockRef = useRef();

	useEffect(() => {
		if (isSignup) {
			setLock(window.scrollY);
			lockRef.current = window.scrollY;
		} else {
			setLock(undefined);
		}
	}, [isSignup]);

	useEffect(() => {
		if (!lock && lockRef.current) {
			window.scrollTo({ top: lockRef.current });
			lockRef.current = undefined;
		}
	}, [lock, isMobile]);

	return (
		<S.BlurWrapper lock={lock}>
			<S.BlurWrapperContent lock={lock}>{children}</S.BlurWrapperContent>
		</S.BlurWrapper>
	);
};
