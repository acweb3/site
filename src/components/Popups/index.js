import React from "react";

import * as S from "./styled";
import { Card } from "./Card";
import { breakpoints } from "../../styles/breakpoints";

export const Popups = () => {
	return (
		<S.PopupsSection>
			<S.CardsContainer>
				<Card
					css={`
						margin: 0 16px 0 16px;
						min-height: 320px;
						flex-direction: column;

						${breakpoints.small`
							margin: 0 35% 0 32%;
							min-height: 320px;
							transform: scale(1.1);
						`}
					`}
				>
					<S.CardHeader>what we do</S.CardHeader>
					<S.BigBlurb>web3 enabled web development</S.BigBlurb>
					<S.Blurb>
						we can help you to truly own your crypto project, and to
						present it to the world in a way that matches your brand
						excellence. we write everything from smart contracts to
						marketplaces to auction sites.
					</S.Blurb>
				</Card>
				<div
					css={`
						margin: 0 16px 0 16px;

						${breakpoints.small`
							display: grid;
							grid-template-columns: 6fr 4fr;
							column-gap: 32px;
							margin: 16px 22% 0 22%;
							transform: scale(1.05);
						`}
					`}
				>
					<Card
						css={`
							flex: 0 0 40%;
							height: 250px;
							min-height: 200px;
							margin-top: 16px;

							${breakpoints.small`
								transform: scale(0.95);
								margin-bottom: -32px;
								margin-top: 0px;
							`}
						`}
					>
						{/* <S.CardHeader>what we do</S.CardHeader> */}
						<S.BigBlurb>
							community development activations
						</S.BigBlurb>
						<S.Blurb>
							craft experiences for your community that are as
							unique as you are, along with tools like custom
							discord community hubs and informed strategy
							consulting
						</S.Blurb>
					</Card>
					<div
						css={`
							display: flex;
							flex-direction: column;

							flex: 0 0 60%;
						`}
					>
						<Card
							css={`
								min-height: 220px;
								margin-top: 16px;

								${breakpoints.small`
									margin-bottom: 24px;
									transform: scale(0.9) translate(-30px, 5px);
								`}
							`}
						>
							<S.Blurb>
								we'll work with you to make your dreams a
								reality. whether you're a visionary looking to
								launch a revolutionary product, an artist trying
								to break the mold with the newest web design
								hotness, or a retiree trying to switch inputs
								from HDMI 3 to HDMI 1.
							</S.Blurb>
						</Card>
					</div>
				</div>
			</S.CardsContainer>
		</S.PopupsSection>
	);
};
