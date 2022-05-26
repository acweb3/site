import { Phone16, Email16 } from "@carbon/icons-react";
import * as S from "components/WeAre/WeAre.styled";
import { BaseButton } from "components/ui/BaseButton";
import { BaseLink } from "components/ui/BaseLink";
import { Column } from "components/ui/Column";
import React from "react";

export const WeAre = () => {
	return (
		<S.WeAre>
			<Column
				css={`
					flex: 0 0 320px;
				`}
			>
				<Column.Header>
					we are a digital studio specializing in nfts, crypto, and
					web3
				</Column.Header>
				<Column.Text>
					we create communities, write smart contracts, and develop
					websites for web3. write smart contracts, and develop
					websites for web3. write smart contracts, and develop
					websites for web3.
				</Column.Text>
			</Column>

			<Column
				css={`
					flex: 0 0 280px;
					margin-left: 64px;
				`}
			>
				<Column.Header>
					we are a decentralized team with a physical presence in
					philadelphia and milan
				</Column.Header>
				<Column.Text>
					if you're in the city and want to jam, please reach out.
				</Column.Text>
			</Column>

			<Column
				css={`
					flex: 0 0 280px;
					margin-left: 48px;
				`}
			>
				<Column.Header>let's get in touch</Column.Header>
				<Column.Text>
					feel free to reach out about any questions regarding what we
					can do for you, what we charge, and past work.
				</Column.Text>

				<S.WeAreColumnButtons>
					<BaseLink href="tel:12157765485">
						<BaseButton
							icon={<Phone16 />}
							css={`
								border-radius: 0 0 0 16px;
							`}
						>
							call
						</BaseButton>
					</BaseLink>
					<BaseLink href="mailto:andy@aboltc.com">
						<BaseButton
							icon={<Email16 />}
							css={`
								border-radius: 0 16px 0 0;
							`}
						>
							email
						</BaseButton>
					</BaseLink>
				</S.WeAreColumnButtons>
			</Column>
		</S.WeAre>
	);
};
