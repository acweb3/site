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
					<S.RecentWorkProject width={900}>
						<StaticImage
							src="../../assets/images/batCowls.webp"
							alt="mirrored"
							width={900}
							height={400}
							x
						/>
						<S.RecentWorkSpreadCopy>
							<S.RecentWorkHeader>bat cowls</S.RecentWorkHeader>
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
						<S.RecentWorkHeader>highrises</S.RecentWorkHeader>
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
							src="../../assets/images/mirrored.jpg"
							alt="mirrored"
							width={600}
							height={500}
						/>
						<S.RecentWorkHeader>mirrored</S.RecentWorkHeader>
						<S.RecentWorkCopy>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</S.RecentWorkCopy>
					</S.RecentWorkProject>
				</S.RecentWorkProjects>
			</S.RecentWorkPortfolio>
		</S.RecentWork>
	);
};
