import {
	Email16,
	Phone16,
	LogoGithub24,
	LogoTwitter32,
	PhoneFilled16,
} from "@carbon/icons-react";
import * as S from "components/Footer/Footer.styled";
import { BaseButton } from "components/ui/BaseButton";
import { BaseLink } from "components/ui/BaseLink";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";

export const Footer = () => {
	return (
		<S.Footer>
			<S.FooterLogo />
			<S.FooterContent>
				<S.FooterColumn>
					<Column>
						<Column.Header>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</Column.Header>
						<Column.Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Column.Text>
					</Column>

					<S.FooterLogoWrapper>
						<BaseLink href="https://twitter.com/aboltc_">
							<LogoTwitter32 />
						</BaseLink>

						<BaseLink href="https://github.com/acweb3">
							<LogoGithub24 />
						</BaseLink>
					</S.FooterLogoWrapper>
				</S.FooterColumn>

				<S.FooterRightColumns>
					<Column
						css={`
							${(props) => props.theme.breakpoints.extraSmall`
								flex: 0 0 320px;
								margin-left: auto;
							`}
						`}
					>
						<Column.Header>
							we are a decentralized team with a physical presence
							in philadelphia and milan
						</Column.Header>
						<Column.Text>
							if you're in the city and want to jam, please reach
							out.
						</Column.Text>
					</Column>

					<Column
						css={`
							margin-top: 48px;

							${(props) => props.theme.breakpoints.extraSmall`
								margin-top: 0;
								flex: 0 0 320px;
								margin-left: 48px;
							`}
						`}
					>
						<Column.Header>
							<CoolCircle
								css={`
									color: ${(props) =>
										props.theme.colors.black[0]};

									& > * {
										border: 1px solid
											${(props) =>
												props.theme.colors.white[0]};
									}
								`}
								isSmall
								isInverted
							>
								<PhoneFilled16 /> call today
							</CoolCircle>
							let's get in touch — we're a phonecall away
						</Column.Header>
						<Column.Text>
							feel free to reach out about any questions regarding
							what we can do for you, what we charge, and past
							work.
						</Column.Text>

						<Column.Actions>
							<BaseLink href="tel:12157765485">
								<BaseButton
									icon={<Phone16 />}
									css={`
										border-radius: 0 0 0 16px;
										border-color: ${(props) =>
											props.theme.colors.white[0]};
									`}
								>
									call
								</BaseButton>
							</BaseLink>
							<BaseLink href="mailto:andy@aboltc.com">
								<BaseButton
									icon={<Email16 />}
									css={`
										border-color: ${(props) =>
											props.theme.colors.white[0]};
									`}
								>
									email
								</BaseButton>
							</BaseLink>
						</Column.Actions>
					</Column>
				</S.FooterRightColumns>
			</S.FooterContent>
			<S.FooterMarquee>
				<S.FooterMarqueeSpan>aboltc aboltc aboltc </S.FooterMarqueeSpan>
				<S.FooterMarqueeSpan>aboltc aboltc aboltc </S.FooterMarqueeSpan>
			</S.FooterMarquee>
		</S.Footer>
	);
};
