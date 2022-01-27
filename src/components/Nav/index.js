import React from "react";
import { LogoXing32 } from "@carbon/icons-react";
import Logo from "../../assets/icons/logo.inline.svg";

import * as S from "./styled";

export const Nav = () => {
	return (
		<S.AppBar>
			<S.LogoContainer>
				<Logo
					css={`
						height: 66px;
					`}
				/>
			</S.LogoContainer>

			<S.LinkContainer>
				{/* <S.Link href="#">our work</S.Link>
				<S.Link href="#">about us</S.Link> */}
				<S.Mail href="#">cooper@a⚡c.ws</S.Mail>
			</S.LinkContainer>
		</S.AppBar>
	);
};
