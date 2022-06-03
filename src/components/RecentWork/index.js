import { LogoDiscord24, Wikis24 } from "@carbon/icons-react";
import * as S from "components/RecentWork/RecentWork.styled";
import { RecentWorkMarquee } from "components/RecentWork/RecentWorkMarquee";
import { BaseLink } from "components/ui/BaseLink";
import { Column } from "components/ui/Column";
import { StaticImage } from "gatsby-plugin-image";
import { imageTintObj } from "styles/util";

export const RecentWork = () => {
	return (
		<>
			<RecentWorkMarquee />
			<S.RecentWork id="our-work">
				<S.RecentWorkBanner>
					<S.RecentWorkBannerCopy>
						recent work →
					</S.RecentWorkBannerCopy>
				</S.RecentWorkBanner>
				<S.RecentWorkPortfolio>
					<S.RecentWorkProjects>
						<S.RecentWorkProject width={800}>
							<StaticImage
								src="../../assets/images/batCowls.webp"
								alt="bat cowls"
								width={800}
								height={400}
								imgStyle={{
									...imageTintObj,
								}}
							/>
							<S.RecentWorkCoolStar>new</S.RecentWorkCoolStar>
							<S.RecentWorkSpreadCopy>
								<S.RecentWorkHeader>
									bat cowls
									<S.RecentWorkSup>community</S.RecentWorkSup>
								</S.RecentWorkHeader>
								<S.RecentWorkCopy isRight>
									we developed the community for warner
									brother's batman nft project. we manage
									engagement and security for a discord with
									over 10,000 members.
								</S.RecentWorkCopy>
							</S.RecentWorkSpreadCopy>
							<Column.Actions>
								<BaseLink
									css={`
										${(props) => props.theme.breakpoints
											.medium`
											margin-left: auto;
											margin-right: 0;
										`}
									`}
									aria-label="bat cowls discord"
									href="https://discord.gg/batcowls"
								>
									<LogoDiscord24 />
								</BaseLink>
							</Column.Actions>
						</S.RecentWorkProject>
					</S.RecentWorkProjects>
					<S.RecentWorkProjects>
						<S.RecentWorkProject width={480}>
							<StaticImage
								src="../../assets/images/highrises.webp"
								alt="highrises"
								width={480}
								imgStyle={{
									...imageTintObj,
								}}
							/>
							<S.RecentWorkCoolStar>new</S.RecentWorkCoolStar>
							<S.RecentWorkHeader>
								highrises
								<S.RecentWorkSup>code</S.RecentWorkSup>
								<S.RecentWorkSup>community</S.RecentWorkSup>
							</S.RecentWorkHeader>
							<S.RecentWorkCopy>
								we developed the mint site, smart contracts, and
								discord for chris hytha's award-winning
								highrises project. we managed nft metadata,
								implemented mint mechanics, and handled sold-out
								drops.
							</S.RecentWorkCopy>
							<Column.Actions>
								<BaseLink
									aria-label="highrises site"
									href="https://highrises.hythacg.com/"
								>
									<Wikis24 />
								</BaseLink>

								<BaseLink
									aria-label="hytha discord"
									href="https://discord.gg/meX2WS6Jjk"
								>
									<LogoDiscord24 />
								</BaseLink>
							</Column.Actions>
						</S.RecentWorkProject>
						<S.RecentWorkProject width={480}>
							<StaticImage
								src="../../assets/images/e11even.jpg"
								alt="e11even"
								width={560}
								height={480}
								imgStyle={{
									...imageTintObj,
								}}
							/>
							<S.RecentWorkHeader>
								e11even captain's club
								<S.RecentWorkSup>community</S.RecentWorkSup>
							</S.RecentWorkHeader>
							<S.RecentWorkCopy>
								we manage the community for miami's e11even
								nightclub for the months leading up to project
								sold-out mint. we handle community engagement
								and are a communications liason between the
								nightclub and horizen labs.
							</S.RecentWorkCopy>

							<Column.Actions>
								<BaseLink
									aria-label="e11even discord"
									href="https://discord.gg/11captains"
								>
									<LogoDiscord24 />
								</BaseLink>
							</Column.Actions>
						</S.RecentWorkProject>
					</S.RecentWorkProjects>
				</S.RecentWorkPortfolio>
			</S.RecentWork>
		</>
	);
};
