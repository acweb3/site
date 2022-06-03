import { useScrollHeight } from "common/hooks/useScrollHeight";
import { useWindowSize } from "common/hooks/useWindowSize";
import * as S from "components/Process/ProcessStep/ProcessStep.styled";
import { Bolts } from "components/ui/Bolts";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";
import { useIsSignupContext } from "contexts/IsSignupContext";
import { GatsbyImage } from "gatsby-plugin-image";
import { imageTintObj } from "styles/util";

export const ProcessStep = ({ processStep }) => {
	const { setIsSignup } = useIsSignupContext();

	return (
		<S.ProcessStep>
			<S.ProcessCaption>
				<Column
					css={`
						height: 100%;
						padding-bottom: 48px;

						${(props) => props.theme.breakpoints.extraSmall`
							flex: 0 0 360px;
						`}
					`}
				>
					<Column.Header>
						<CoolCircle isSmall isInverted>
							{processStep.bubble}
						</CoolCircle>
					</Column.Header>
					<Column.Header
						css={`
							font-size: ${(props) => props.theme.fontSize.h4};
							font-family: ${(props) =>
								props.theme.fontFamily.mono};
						`}
					>
						{processStep.header}
					</Column.Header>
					<Column.Text
						css={`
							font-family: ${(props) =>
								props.theme.fontFamily.sansSerif};
							margin-top: auto;
						`}
					>
						{processStep.body}
					</Column.Text>

					<Column.Actions onClick={() => setIsSignup(true)}>
						{processStep.action}
					</Column.Actions>
				</Column>
			</S.ProcessCaption>
			<S.ProcessStepVisual>
				<Bolts />
				<S.ProcessStepImage>
					<GatsbyImage
						style={{
							width: 240,
							height: 240,
							...imageTintObj,
						}}
						objectFit="contain"
						alt="#TODO"
						image={
							processStep.childrenImageSharp[0].gatsbyImageData
						}
					/>
				</S.ProcessStepImage>
				<Bolts />
			</S.ProcessStepVisual>
		</S.ProcessStep>
	);
};
