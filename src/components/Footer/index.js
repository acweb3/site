import React from "react";

import * as S from "./styled";
import { breakpoints } from "../../styles/breakpoints";

import LogoWhite from "../../assets/icons/logo--white.inline.svg";

export const Footer = () => {
	return (
		<S.FooterContainer>
			<S.Column
				css={`
					${breakpoints.small`
						flex: 0 0 300px;
					`}
				`}
			>
				<LogoWhite
					css={`
						margin-bottom: -40px;
						margin-left: -16px;
						width: 120px;
					`}
				/>
				<S.ColumnHeader>
					we are a development studio specializing in crypto and web3.
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

					${breakpoints.small`
						margin-left: 120px;
						flex-direction: row;

						& > div {
							margin-left: 32px;

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
						${breakpoints.small`
							width: 100%;
						`}
					`}
				>
					<S.ColumnHeader>
						we are a fully remote organization with a physical
						presence in Philadelphia, PA.
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
						${breakpoints.small`
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
						${breakpoints.small`
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
		</S.FooterContainer>
	);
};
