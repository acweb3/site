import {
	Email16,
	LogoGithub24,
	LogoTwitter24,
	Phone16,
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
							we are a decentralized team with a physical presence
							in philadelphia and milan
						</Column.Header>
						<Column.Text>
							if you're in the city and want to jam, please reach
							out. we're always down to talk about new hotness in
							web3.
						</Column.Text>
					</Column>

					<S.FooterLogoWrapper>
						<BaseLink
							aria-label="aboltc twitter"
							href="https://twitter.com/aboltc_"
						>
							<LogoTwitter24 />
						</BaseLink>

						<BaseLink
							aria-label="aboltc github"
							href="https://github.com/acweb3"
						>
							<LogoGithub24 />
						</BaseLink>
					</S.FooterLogoWrapper>
				</S.FooterColumn>

				<S.FooterRightColumns>
					<Column
						css={`
							margin-top: 48px;

							${(props) => props.theme.breakpoints.extraSmall`
								margin-top: 0;
								margin-left: 48px;
								flex: 0 0 320px;
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
								<Phone16 /> say hi
							</CoolCircle>
							let's get in touch — we're a phone call away
						</Column.Header>
						<Column.Text>
							it's always free to talk! we can help you hash out a
							plan and see what would fit best for your project.
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
			<S.FooterMarquee>aboltc aboltc aboltc</S.FooterMarquee>
		</S.Footer>
	);
};
