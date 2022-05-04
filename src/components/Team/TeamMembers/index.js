import * as S from "components/Team/TeamMembers/TeamMembers.styled";
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
					alt="mirrored"
					width={320}
					height={400}
				/>
				<Column.Header main>cooper sherwin</Column.Header>
				<Column.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Column.Text>
			</Column>

			<Column
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
				<Column.Header main>andy gallagher</Column.Header>
				<Column.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Column.Text>
			</Column>
		</S.TeamMembers>
	);
};
