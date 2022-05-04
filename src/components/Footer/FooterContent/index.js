import { LogoGithub24, LogoTwitter32 } from "@carbon/icons-react";
import * as S from "components/Footer/FooterContent/FooterContent.styled";
import { BaseLink } from "components/ui/BaseLink";
import React from "react";

export const FooterContent = ({ isVisible }) => {
	return (
		<S.FooterContent>
			<S.FooterContentColumn>
				<S.FooterContentLogo />
				<S.FooterContentHeader>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</S.FooterContentHeader>
				<S.FooterContentText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</S.FooterContentText>
				<S.FooterContentLogoWrapper>
					<BaseLink
						href="https://twitter.com/aboltc_"
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={isVisible ? 0 : -1}
					>
						<LogoTwitter32 />
					</BaseLink>

					<BaseLink
						href="https://github.com/acweb3"
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={isVisible ? 0 : -1}
					>
						<LogoGithub24 />
					</BaseLink>
				</S.FooterContentLogoWrapper>
			</S.FooterContentColumn>
		</S.FooterContent>
	);
};
