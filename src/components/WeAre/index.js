import * as S from "components/WeAre/WeAre.styled";
import React from "react";

export const WeAre = () => {
	return (
		<S.WeAre>
			<S.Column
				css={`
					${(props) => props.theme.breakpoints.small`
						flex: 0 0 320px;
					`}
				`}
			>
				<S.ColumnHeader main>
					we are a digital studio specializing in nfts, crypto, and
					web3
				</S.ColumnHeader>
				<S.ColumnText>
					we create communities, write smart contracts, and develop
					websites for web3.
				</S.ColumnText>
			</S.Column>

			<S.Column
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
				<S.Column
					hasAfter
					css={`
						flex: 1;

						width: 55%;
						${(props) => props.theme.breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<S.ColumnHeader>
						we are a decentralized team with a physical presence in
						philadelphia and paris
					</S.ColumnHeader>
					<S.ColumnText>
						if you're in the city and want to jam, please reach out.
					</S.ColumnText>
				</S.Column>

				<S.Column
					hasAfter
					css={`
						flex: 1;

						width: 86%;
						${(props) => props.theme.breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<S.ColumnHeader>
						we've been doing this crypto thing for a minute&hellip;
					</S.ColumnHeader>
					<S.ColumnText>
						we have been holding crypto assets since 2013 and have
						held out for two crypto winters.
					</S.ColumnText>
				</S.Column>

				<S.Column
					hasAfter
					css={`
						flex: 1;

						width: 44%;
						${(props) => props.theme.breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<S.ColumnHeader>let's get in touch</S.ColumnHeader>
					<S.ColumnText>
						feel free to reach out about any questions regarding
						what we can do for you, what we charge, and past work.
					</S.ColumnText>
				</S.Column>
			</S.Column>
		</S.WeAre>
	);
};
