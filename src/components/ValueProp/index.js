import * as S from "components/ValueProp/ValueProp.styled";
import { Column } from "components/ui/Column";

export const ValueProp = () => {
	return (
		<S.ValueProp>
			<S.ValuePropCopy>
				<Column
					css={`
						flex: 0 0 240px;
						padding-bottom: 48px;
					`}
				>
					<Column.Header main>web3 enabled development</Column.Header>
					<Column.Text>
						we write everything from smart contracts to marketplaces
						to auction sites. we can help you to truly own your
						crypto project and present it to the world in a way that
						matches your brand excellence.
					</Column.Text>

					<Column.Header main>
						community development activations
					</Column.Header>
					<Column.Text>
						craft experiences for your community that are as unique
						as you are, along with tools like custom discord
						community hubs and informed strategy consulting.
					</Column.Text>
				</Column>
			</S.ValuePropCopy>
		</S.ValueProp>
	);
};
