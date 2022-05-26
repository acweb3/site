import { LogoGithub24, LogoTwitter32 } from "@carbon/icons-react";
import * as S from "components/Footer/Footer.styled";
import { BaseLink } from "components/ui/BaseLink";
import React from "react";

export const Footer = () => {
	return (
		<S.Footer>
			<S.FooterContent>
				<S.FooterContentGradient />
				<S.FooterContentColumn>
					<S.FooterContentLogo />
					<S.FooterContentHeader>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</S.FooterContentHeader>
					<S.FooterContentText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</S.FooterContentText>
					<S.FooterContentLogoWrapper>
						<BaseLink href="https://twitter.com/aboltc_">
							<LogoTwitter32 />
						</BaseLink>

						<BaseLink href="https://github.com/acweb3">
							<LogoGithub24 />
						</BaseLink>
					</S.FooterContentLogoWrapper>
				</S.FooterContentColumn>
			</S.FooterContent>
		</S.Footer>
	);
};
