import * as S from "components/Team/Team.styled";
import { StaticImage } from "gatsby-plugin-image";

export const Team = () => {
	return (
		<S.Team>
			<S.TeamDescription>
				<S.Column
					css={`
						flex: 0 0 320px;
						border-top: 1px solid
							${(props) => props.theme.colors.black[0]};
						padding-top: 48px;
					`}
				>
					<S.ColumnHeader main>
						we are a best in industry tiger team lorem ipsum io
					</S.ColumnHeader>
					<S.ColumnText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam.
					</S.ColumnText>
				</S.Column>

				<S.Column
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
					<S.Column
						hasAfter
						css={`
							flex: 0 0 400px;
						`}
					>
						<S.ColumnHeader main>
							yada yada yada more bs
						</S.ColumnHeader>
						<S.ColumnText>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</S.ColumnText>
					</S.Column>
				</S.Column>
			</S.TeamDescription>

			<S.TeamMembers>
				<S.Column
					hasAfter
					css={`
						flex: 0 0 320px;
					`}
				>
					<StaticImage
						src="../../assets/images/team/cooper.jpg"
						alt="mirrored"
						width={320}
						height={400}
					/>
					<S.ColumnHeader main>cooper sherwin</S.ColumnHeader>
					<S.ColumnText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</S.ColumnText>
				</S.Column>

				<S.Column
					hasAfter
					css={`
						flex: 0 0 320px;
						margin-left: 120px;
					`}
				>
					<StaticImage
						src="../../assets/images/team/andy.jpg"
						alt="mirrored"
						width={320}
						height={480}
					/>
					<S.ColumnHeader main>andy gallagher</S.ColumnHeader>
					<S.ColumnText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</S.ColumnText>
				</S.Column>
			</S.TeamMembers>
		</S.Team>
	);
};
