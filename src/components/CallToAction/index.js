import * as S from "components/CallToAction/CallToAction.styled";
import { StaticImage } from "gatsby-plugin-image";

export const CallToAction = () => {
	return (
		<S.CallToAction>
			<StaticImage
				style={{
					position: "absolute",
					opacity: "0.4",
					top: "0",
					left: "0",
					height: "100%",
					width: "100%",
				}}
				src={"../../assets/images/texture/topographical--black--1.jpg"}
			/>
			<S.CallToActionBox>
				<S.CallToActionLogoBox>
					<S.CallToActionLogo />
				</S.CallToActionLogoBox>
				<S.CallToActionCopy>
					artists, creators, and founders are driving a revolution in
					expression and ownership. your work isn't just another
					product off the shelf — your website, smart contracts, and
					discord builds shouldn't be either.
				</S.CallToActionCopy>
			</S.CallToActionBox>
		</S.CallToAction>
	);
};
