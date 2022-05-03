import { Code16, FaceSatisfied16 } from "@carbon/icons-react";
import { useWindowListener } from "common/hooks/useWindowListener";
import * as S from "components/Nav/Nav.styled";
import { NavAction } from "components/Nav/NavAction";
import throttle from "lodash.throttle";
import React, { useEffect } from "react";
import { useCallback, useRef, useState } from "react";

export const Nav = () => {
	const scrollRef = useRef(0);
	const [isVisible, setIsVisible] = useState(true);
	const [hasShadow, setHasShadow] = useState(false);
	const navRef = useRef();

	const throttleScroll = useCallback(
		throttle(() => {
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

	return (
		<>
			<S.NavOffset />
			<S.Nav
				ref={navRef}
				onFocus={() => {
					setIsVisible(true);
					setHasShadow(window.scrollY > 100);
				}}
				isVisible={isVisible}
				hasShadow={hasShadow}
			>
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
						<S.NavLink href="#our-work">our work</S.NavLink>
						<S.NavLink href="#our-work">the process</S.NavLink>
						<S.NavLink href="#">our team</S.NavLink>
					</S.NavLinks>
					<NavAction isActive={isVisible}>
						<FaceSatisfied16 />
						community
					</NavAction>
					<NavAction isActive={isVisible}>
						<Code16 />
						code
					</NavAction>
				</S.NavLinkContainer>
			</S.Nav>
		</>
	);
};
