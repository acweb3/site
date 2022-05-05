import * as S from "components/Process/ProcessStep/ProcessStep.styled";
import { GatsbyImage } from "gatsby-plugin-image";

export const ProcessStep = ({ processStep }) => {
	return (
		<S.ProcessStep>
			<GatsbyImage
				style={{
					width: 640,
				}}
				alt="#TODO"
				image={processStep.childrenImageSharp[0].gatsbyImageData}
			/>
			<S.ProcessCaption>Lorem ipsum</S.ProcessCaption>
		</S.ProcessStep>
	);
};
