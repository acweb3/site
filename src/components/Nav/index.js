import { Code16, FaceSatisfied16 } from "@carbon/icons-react";
import { useWindowListener } from "common/hooks/useWindowListener";
import * as S from "components/Nav/Nav.styled";
import { NavAction } from "components/Nav/NavAction";
import { useActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";
import { useOpeningAnimationContext } from "contexts/OpeningAnimationContext";
import throttle from "lodash.throttle";
import React, { useEffect } from "react";
import { useCallback, useRef, useState } from "react";

export const Nav = () => {
	const { activeRecentWork } = useActiveRecentWorkContext();
	const scrollRef = useRef(0);
	const [isVisible, setIsVisible] = useState(true);
	const [hasShadow, setHasShadow] = useState(true);
	const navRef = useRef();
	const { isCollapsed } = useOpeningAnimationContext();

	const throttleScroll = useCallback(
		throttle(() => {
			// # TODO => Fix this for multiple viewports
			setIsVisible(
				window.scrollY < 100 || scrollRef.current > window.scrollY
			);
			setHasShadow(window.scrollY > 100);

			scrollRef.current = window.scrollY;
		}, 100),
		[]
	);

	useWindowListener(
		"scroll",
		() => {
			throttleScroll();
		},
		[throttleScroll]
	);

	useEffect(() => {
		if (!isVisible && navRef.current?.contains(document.activeElement)) {
			document.activeElement.blur();
		}
	}, [isVisible]);

	useEffect(() => {
		if (isCollapsed) {
			setHasShadow(window.scrollY > 100);
		}
	}, [isCollapsed]);

	return (
		<>
			<S.NavOffset />
			<S.Nav
				ref={navRef}
				onFocus={() => {
					setIsVisible(true);
					setHasShadow(window.scrollY > 100);
				}}
				isVisible={!activeRecentWork && isVisible}
				hasShadow={hasShadow}
			>
				<S.NavContent>
					<S.NavLogoContainer
						onClick={() => {
							window.scrollTo(0, 0);
							document.activeElement.blur();
						}}
					>
						<S.NavLogo />
					</S.NavLogoContainer>

					<S.NavLinkContainer>
						<S.NavLinks>
							<S.NavLink href="#the-process">
								the process
							</S.NavLink>
							<S.NavLink href="#our-work">our work</S.NavLink>
							<S.NavLink href="#the-team">the team</S.NavLink>
						</S.NavLinks>
					</S.NavLinkContainer>

					<S.NavActionsContainer>
						<NavAction
							isActive={isVisible}
							buttonProps={{
								icon: <FaceSatisfied16 />,
								style: {
									borderRadius: "0 16px 0 16px",
								},
							}}
						>
							talk to sales
						</NavAction>
					</S.NavActionsContainer>
				</S.NavContent>
			</S.Nav>
		</>
	);
};
