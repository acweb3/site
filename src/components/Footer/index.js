import { LogoGithub24, LogoTwitter32 } from "@carbon/icons-react";
import * as S from "components/Footer/Footer.styled";
import React from "react";

export const Footer = () => {
	return (
		<S.Footer>
			<S.FooterContent>
				<S.FooterLogo />
				<S.FooterHeader>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</S.FooterHeader>
				<S.FooterText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</S.FooterText>
				<S.FooterLogoWrapper>
					<LogoTwitter32 />
					<LogoGithub24 />
				</S.FooterLogoWrapper>
			</S.FooterContent>
		</S.Footer>
	);
};
