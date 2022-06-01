import {
	LogoGithub24,
	LogoTwitter24,
	LogoLinkedin24,
	Wikis24,
} from "@carbon/icons-react";
import { useScrollHeight } from "common/hooks/useScrollHeight";
import { useWindowSize } from "common/hooks/useWindowSize";
import * as S from "components/Team/TeamMembers/TeamMembers.styled";
import { BaseLink } from "components/ui/BaseLink";
import { Column } from "components/ui/Column";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";

export const TeamMembers = () => {
	const { scrollHeight } = useScrollHeight();
	const { isMobile } = useWindowSize();
	const teamRef = useRef();
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		setOffsetY(
			Math.min(
				Math.max(
					0,
					window.scrollY -
						teamRef.current.offsetTop -
						teamRef.current.offsetHeight * 0.3
				) * 0.8,
				1000
			)
		);
	}, [scrollHeight]);

	return (
		<S.TeamMembers ref={teamRef} isMobile={isMobile} offsetY={offsetY}>
			<S.TeamMembersColumn>
				<StaticImage
					src="../../../assets/images/team/cooper.jpg"
					alt="cooper"
					width={320}
					height={400}
					imgStyle={{
						filter: "grayscale(100%)",
						mixBlendMode: "multiply",
					}}
				/>
				<Column.Header
					main
					css={`
						margin-top: 16px;
					`}
				>
					cooper sherwin
				</Column.Header>
				<Column.Text>
					cooper is a business developer specializing in nft strategy,
					crypto culture, and discord design. he has led multiple
					projects to OpenSea's #1 trending position, most notably
					Rowhomes and LinksDAO.
				</Column.Text>

				<S.TeamMembersLinks>
					<BaseLink href="https://twitter.com/CoopNFT">
						<LogoTwitter24 />
					</BaseLink>

					<BaseLink href="https://www.linkedin.com/in/coopersherwin/">
						<LogoLinkedin24 />
					</BaseLink>
				</S.TeamMembersLinks>
			</S.TeamMembersColumn>

			<S.TeamMembersColumn>
				<StaticImage
					src="../../../assets/images/team/andy.jpg"
					alt="andy"
					width={320}
					height={480}
					imgStyle={{
						filter: "grayscale(100%)",
						mixBlendMode: "multiply",
					}}
				/>
				<Column.Header
					main
					css={`
						margin-top: 16px;
					`}
				>
					andy gallagher
				</Column.Header>
				<Column.Text>
					andrew is a software dev interested in creating beautiful
					interactions for the web and crypto. andrew has developed
					award-winning websites for fine arts institutions and
					startups.
				</Column.Text>

				<S.TeamMembersLinks>
					<BaseLink href="https://twitter.com/0x_reefer">
						<LogoTwitter24 />
					</BaseLink>

					<BaseLink href="https://github.com/andyGallagher">
						<LogoGithub24 />
					</BaseLink>

					<BaseLink href="https://www.linkedin.com/in/%E2%9A%A1%E2%98%94%E2%9B%88/">
						<LogoLinkedin24 />
					</BaseLink>

					<BaseLink href="https://www.andy-gallagher.com">
						<Wikis24 />
					</BaseLink>
				</S.TeamMembersLinks>
			</S.TeamMembersColumn>
		</S.TeamMembers>
	);
};
