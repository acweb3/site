import { LogoGithub24, LogoTwitter32 } from "@carbon/icons-react";
import * as S from "components/Footer/FooterContent/FooterContent.styled";
import { BaseLink } from "components/ui/BaseLink";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const FooterContent = ({ isVisible }) => {
	return (
		<S.FooterContent>
			<StaticImage
				style={{
					zIndex: 0,
					position: "absolute",
					opacity: "0.4",
					top: "0",
					left: "0",
					height: "100%",
					width: "100%",
				}}
				src={"../../assets/images/texture/topographical--black--1.jpg"}
			/>
			<S.FooterContentGradient />
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
						tabIndex={isVisible ? 0 : -1}
					>
						<LogoTwitter32 />
					</BaseLink>

					<BaseLink
						href="https://github.com/acweb3"
						tabIndex={isVisible ? 0 : -1}
					>
						<LogoGithub24 />
					</BaseLink>
				</S.FooterContentLogoWrapper>
			</S.FooterContentColumn>
		</S.FooterContent>
	);
};
