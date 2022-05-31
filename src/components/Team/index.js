import * as S from "components/Team/Team.styled";
import { TeamMembers } from "components/Team/TeamMembers";
import { Column } from "components/ui/Column";

export const Team = () => {
	return (
		<S.Team id="the-team">
			<S.TeamDescription>
				<Column
					css={`
						flex: 0 0 360px;
					`}
				>
					<Column.Header main>
						we are a best in industry tiger team for nft projects
					</Column.Header>
					<Column.Text>our team</Column.Text>
				</Column>
			</S.TeamDescription>

			<TeamMembers />
		</S.Team>
	);
};
