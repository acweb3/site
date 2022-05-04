import * as S from "components/Team/Team.styled";
import { TeamMembers } from "components/Team/TeamMembers";
import { Column } from "components/ui/Column";

export const Team = () => {
	return (
		<S.Team>
			<S.TeamDescription>
				<Column
					css={`
						flex: 0 0 320px;
						border-top: 1px solid
							${(props) => props.theme.colors.black[0]};
						padding-top: 48px;
					`}
				>
					<Column.Header main>
						we are a best in industry tiger team lorem ipsum io
					</Column.Header>
					<Column.Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam.
					</Column.Text>
				</Column>

				<Column
					css={`
						flex: 1;
						flex-direction: column;
						margin-left: 120px;
						flex-direction: row;

						padding-top: 48px;

						& > div {
							margin-left: 80px;

							&:first-of-type {
								margin-left: 0;
							}
						}
					`}
				>
					<Column
						css={`
							flex: 0 0 400px;
						`}
					>
						<Column.Header main>
							yada yada yada more bs
						</Column.Header>
						<Column.Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</Column.Text>
					</Column>
				</Column>
			</S.TeamDescription>

			<TeamMembers />
		</S.Team>
	);
};
