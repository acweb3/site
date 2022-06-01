import * as S from "components/Team/Team.styled";
import { TeamMembers } from "components/Team/TeamMembers";
import { Column } from "components/ui/Column";

export const Team = () => {
	return (
		<S.Team id="the-team">
			<S.TeamDescription>
				<Column
					css={`
						${(props) => props.theme.breakpoints.extraSmall`
							flex: 0 0 360px;
						`}
					`}
				>
					<Column.Header main>
						we are a best in industry tiger team for nft projects
					</Column.Header>
					<Column.Text>
						with what feels like a century of crypto and web3
						experience, andrew and cooper bring a comprehensive
						approach that integrates culture, strategy, and design.
					</Column.Text>
				</Column>
			</S.TeamDescription>

			<TeamMembers />
		</S.Team>
	);
};
