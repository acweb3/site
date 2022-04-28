import { Email16 } from "@carbon/icons-react";
import Logo from "assets/icons/logo--white.inline.svg";
import * as S from "components/Nav/Nav.styled";
import React from "react";

export const Nav = () => {
	return (
		<S.Nav>
			<S.NavLogoContainer>
				<Logo
					css={`
						height: 66px;
					`}
				/>
			</S.NavLogoContainer>

			<S.NavLinkContainer>
				<S.NavLinks>
					<S.NavLink href="#our-work">our work</S.NavLink>
					<S.NavLink href="#">our team</S.NavLink>
				</S.NavLinks>
				<S.NavMail href="mailto:cooper@aboltc.com">
					<Email16 />
					community
				</S.NavMail>
				<S.NavMail href="mailto:andy@aboltc.com">
					<Email16 />
					engineering
				</S.NavMail>
			</S.NavLinkContainer>
		</S.Nav>
	);
};
