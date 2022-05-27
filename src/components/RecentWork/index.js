import * as S from "components/RecentWork/RecentWork.styled";
import { RecentWorkMarquee } from "components/RecentWork/RecentWorkMarquee";
import { CoolStar } from "components/ui/CoolStar";
import { useActiveRecentWorkContext } from "contexts/ActiveRecentWorkContext";
import { StaticImage } from "gatsby-plugin-image";

export const RecentWork = () => {
	const { setActiveRecentWork } = useActiveRecentWorkContext();

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
						{/** # TODO =>  set this to the actual project */}
						<S.RecentWorkProject
							onClick={() => setActiveRecentWork(true)}
							width={800}
						>
							<StaticImage
								src="../../assets/images/batCowls.webp"
								alt="bat cowls"
								width={800}
								height={400}
							/>
							<CoolStar
								css={`
									position: absolute;
									top: -40px;
									right: -40px;
									width: 100px;
									height: 100px;
								`}
							>
								new
							</CoolStar>
							<S.RecentWorkSpreadCopy>
								<S.RecentWorkHeader>
									bat cowls
									<S.RecentWorkSup>community</S.RecentWorkSup>
								</S.RecentWorkHeader>
								<S.RecentWorkCopy isRight>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</S.RecentWorkCopy>
							</S.RecentWorkSpreadCopy>
						</S.RecentWorkProject>
					</S.RecentWorkProjects>
					<S.RecentWorkProjects>
						<S.RecentWorkProject width={480}>
							<StaticImage
								src="../../assets/images/highrises.webp"
								alt="highrises"
								width={480}
							/>
							<S.RecentWorkHeader>
								highrises
								<S.RecentWorkSup>code</S.RecentWorkSup>
								<S.RecentWorkSup>community</S.RecentWorkSup>
							</S.RecentWorkHeader>
							<S.RecentWorkCopy>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</S.RecentWorkCopy>
						</S.RecentWorkProject>
						<S.RecentWorkProject width={480}>
							<StaticImage
								src="../../assets/images/e11even.jpg"
								alt="e11even"
								width={560}
								height={480}
							/>
							<S.RecentWorkHeader>
								e11even
								<S.RecentWorkSup>community</S.RecentWorkSup>
							</S.RecentWorkHeader>
							<S.RecentWorkCopy>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</S.RecentWorkCopy>
						</S.RecentWorkProject>
					</S.RecentWorkProjects>
					<S.RecentWorkProjects isRight>
						<S.RecentWorkProject width={880}>
							<StaticImage
								src="../../assets/images/linksdao.png"
								alt="linksdao"
								width={880}
								height={480}
							/>
							{/* <S.RecentWorkRibbon>new</S.RecentWorkRibbon> */}
							<S.RecentWorkSpreadCopy>
								<S.RecentWorkHeader>
									linksdao
									<S.RecentWorkSup>community</S.RecentWorkSup>
								</S.RecentWorkHeader>
								<S.RecentWorkCopy isRight>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</S.RecentWorkCopy>
							</S.RecentWorkSpreadCopy>
						</S.RecentWorkProject>
					</S.RecentWorkProjects>
				</S.RecentWorkPortfolio>
			</S.RecentWork>
		</>
	);
};
