import {
	LogoGithub24,
	LogoTwitter24,
	LogoLinkedin24,
	Wikis24,
} from "@carbon/icons-react";
import * as S from "components/Team/TeamMembers/TeamMembers.styled";
import { BaseLink } from "components/ui/BaseLink";
import { Column } from "components/ui/Column";
import { StaticImage } from "gatsby-plugin-image";

export const TeamMembers = () => {
	return (
		<S.TeamMembers>
			<Column
				css={`
					flex: 0 0 320px;
				`}
			>
				<StaticImage
					src="../../assets/images/team/cooper.jpg"
					alt="cooper"
					width={320}
					height={400}
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Column.Text>

				<S.TeamMembersLinks>
					<BaseLink href="https://twitter.com/CoopNFT">
						<LogoTwitter24 />
					</BaseLink>

					<BaseLink href="https://www.linkedin.com/in/coopersherwin/">
						<LogoLinkedin24 />
					</BaseLink>
				</S.TeamMembersLinks>
			</Column>

			<Column
				css={`
					flex: 0 0 320px;
					margin-left: 48px;
				`}
			>
				<StaticImage
					src="../../assets/images/team/andy.jpg"
					alt="andy"
					width={320}
					height={480}
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Column.Text>

				<S.TeamMembersLinks>
					<BaseLink href="https://twitter.com/aboltc_">
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
			</Column>
		</S.TeamMembers>
	);
};
