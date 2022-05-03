import * as S from "components/RecentWork/RecentWork.styled";
import { StaticImage } from "gatsby-plugin-image";

export const RecentWork = () => {
	return (
		<S.RecentWork id="our-work">
			<S.RecentWorkBanner>
				<S.RecentWorkBannerCopy>recent work →</S.RecentWorkBannerCopy>
			</S.RecentWorkBanner>
			<S.RecentWorkPortfolio>
				<S.RecentWorkProjects>
					<S.RecentWorkProject width={800}>
						<StaticImage
							src="../../assets/images/batCowls.webp"
							alt="mirrored"
							width={800}
							height={400}
						/>
						{/* <S.RecentWorkRibbon>new</S.RecentWorkRibbon> */}
						<S.RecentWorkSpreadCopy>
							<S.RecentWorkHeader>
								bat cowls
								<S.RecentWorkSup>community</S.RecentWorkSup>
							</S.RecentWorkHeader>
							<S.RecentWorkCopy isRight>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</S.RecentWorkCopy>
						</S.RecentWorkSpreadCopy>
					</S.RecentWorkProject>
				</S.RecentWorkProjects>
				<S.RecentWorkProjects>
					<S.RecentWorkProject width={500}>
						<StaticImage
							src="../../assets/images/highrises.webp"
							alt="highrises"
							width={500}
						/>
						<S.RecentWorkHeader>
							highrises
							<S.RecentWorkSup>code</S.RecentWorkSup>
							<S.RecentWorkSup>community</S.RecentWorkSup>
						</S.RecentWorkHeader>
						<S.RecentWorkCopy>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</S.RecentWorkCopy>
					</S.RecentWorkProject>
					<S.RecentWorkProject width={500}>
						<StaticImage
							src="../../assets/images/e11even.jpg"
							alt="mirrored"
							width={600}
							height={500}
						/>
						<S.RecentWorkHeader>
							e11even
							<S.RecentWorkSup>community</S.RecentWorkSup>
						</S.RecentWorkHeader>
						<S.RecentWorkCopy>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</S.RecentWorkCopy>
					</S.RecentWorkProject>
				</S.RecentWorkProjects>
				<S.RecentWorkProjects>
					<S.RecentWorkProject isRight width={900}>
						<StaticImage
							src="../../assets/images/linksdao.png"
							alt="mirrored"
							width={900}
							height={500}
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
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</S.RecentWorkCopy>
						</S.RecentWorkSpreadCopy>
					</S.RecentWorkProject>
				</S.RecentWorkProjects>
			</S.RecentWorkPortfolio>
		</S.RecentWork>
	);
};
