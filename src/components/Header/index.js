import * as S from "components/Header/Header.styled";
import { HeaderLogo } from "components/Header/HeaderLogo";
import { Column } from "components/ui/Column";

export const Header = () => {
	return (
		<S.Header>
			<Column
				css={`
					flex: 0 0 320px;
					padding-bottom: 48px;
				`}
			>
				<Column.Header main>
					lorem ipsum io lorem ipsum io
				</Column.Header>
				<Column.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam.
				</Column.Text>
			</Column>

			<Column
				hasAfter
				css={`
					flex: 0 0 320px;
					padding-bottom: 48px;
					margin-left: 120px;
				`}
			>
				<Column.Header main>
					lorem ipsum io lorem ipsum io
				</Column.Header>
				<Column.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam.
				</Column.Text>
			</Column>

			<Column
				css={`
					flex: 0 0 320px;
					height: 320px;
					padding-top: 48px;
					margin-left: 120px;
					align-items: center;
				`}
			>
				<HeaderLogo />
			</Column>
		</S.Header>
	);
};
