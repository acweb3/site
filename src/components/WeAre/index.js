import { Phone16, Email16, PhoneFilled16 } from "@carbon/icons-react";
import { useWindowSize } from "common/hooks/useWindowSize";
import * as S from "components/WeAre/WeAre.styled";
import { BaseButton } from "components/ui/BaseButton";
import { BaseLink } from "components/ui/BaseLink";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";
import React from "react";

export const WeAre = () => {
	const { isMobile } = useWindowSize();
	return (
		<S.WeAre>
			<Column
				css={`
					${(props) => props.theme.breakpoints.extraSmall`
						flex: 0 0 320px;
					`}
				`}
			>
				<Column.Header>
					we are a digital studio specializing in nfts, crypto, and
					web3
				</Column.Header>
				<Column.Text>
					we create communities, write smart contracts, and develop
					websites for web3. we have the technical range to make a
					secure discord and elaborate mint for your nft project.
				</Column.Text>
			</Column>

			<Column
				css={`
					margin-bottom: 48px;

					${(props) => props.theme.breakpoints.extraSmall`
						flex: 0 0 280px;
						margin-left: 64px;
					`}
				`}
			>
				<Column.Header>
					we have taken projects from an idea into a name-brand
					collection
				</Column.Header>
				<Column.Text>
					we have developed smart contracts, mint sites, and community
					for projects that have trended to the top of opensea. we are
					a proven team with the experience to take your project there
					too.
				</Column.Text>
			</Column>

			<Column
				css={`
					${(props) => props.theme.breakpoints.extraSmall`
						flex: 0 0 280px;
						margin-left: 48px;
					`}
				`}
			>
				<Column.Header>
					<CoolCircle
						isSmall
						isInverted
						css={`
							color: ${(props) => props.theme.colors.black[0]};

							& > * {
								border: 1px solid
									${(props) => props.theme.colors.white[0]};
							}

							${(props) => props.theme.breakpoints.extraSmall`
								color: ${(props) => props.theme.colors.white[0]};

								& > * {
									border: 1px solid
										${(props) => props.theme.colors.black[0]};
								}
							`}
						`}
					>
						<PhoneFilled16 /> call today
					</CoolCircle>
					let's get in touch — we're a phone call away
				</Column.Header>
				<Column.Text>
					feel free to reach out about any questions regarding what we
					can do for you, what we charge, and past work.
				</Column.Text>

				<Column.Actions>
					<BaseLink href="tel:12157765485">
						<BaseButton
							icon={<Phone16 />}
							css={`
								border-radius: 0 0 0 16px;

								border: 1px solid
									${(props) => props.theme.colors.white[0]};
								${(props) =>
									props.theme.breakpoints
										.extraSmall`border: 1px solid ${props.theme.colors.black[0]};`}
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

								border: 1px solid
									${(props) => props.theme.colors.white[0]};
								${(props) =>
									props.theme.breakpoints
										.extraSmall`border: 1px solid ${props.theme.colors.black[0]};`}
							`}
						>
							email
						</BaseButton>
					</BaseLink>
				</Column.Actions>
			</Column>
		</S.WeAre>
	);
};
