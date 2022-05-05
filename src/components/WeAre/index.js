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
					${(props) => props.theme.breakpoints.small`
						flex: 0 0 320px;
					`}
				`}
			>
				<Column.Header main>
					we are a digital studio specializing in nfts, crypto, and
					web3
				</Column.Header>
				<Column.Text>
					we create communities, write smart contracts, and develop
					websites for web3.
				</Column.Text>
			</Column>

			<Column
				css={`
					flex: 1;
					flex-direction: column;

					${(props) => props.theme.breakpoints.small`
						margin-left: 120px;
						flex-direction: row;

						& > div {
							margin-left: 80px;

							&:first-of-type {
								margin-left: 0;
							}
						}
					`}
				`}
			>
				<Column
					hasAfter
					css={`
						flex: 1;

						width: 55%;
						${(props) => props.theme.breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<Column.Header>
						we are a decentralized team with a physical presence in
						philadelphia and paris
					</Column.Header>
					<Column.Text>
						if you're in the city and want to jam, please reach out.
					</Column.Text>
				</Column>

				<Column
					hasAfter
					css={`
						flex: 1;

						width: 86%;
						${(props) => props.theme.breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<Column.Header>
						we've been doing this crypto thing for a minute&hellip;
					</Column.Header>
					<Column.Text>
						we have been holding crypto assets since 2013 and have
						held out for two crypto winters.
					</Column.Text>
				</Column>

				<Column
					css={`
						flex: 1;

						width: 44%;
						${(props) => props.theme.breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<Column.Header>let's get in touch</Column.Header>
					<Column.Text>
						feel free to reach out about any questions regarding
						what we can do for you, what we charge, and past work.
					</Column.Text>

					<BaseLink
						css={`
							margin-top: auto;
							width: calc(100% - 40px);
						`}
						href="tel:12157765485"
					>
						<BaseButton>
							<Phone16 /> hit us up
						</BaseButton>
					</BaseLink>
				</Column>
			</Column>
		</S.WeAre>
	);
};
