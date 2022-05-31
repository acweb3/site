import { useScrollHeight } from "common/hooks/useScrollHeight";
import { useWindowSize } from "common/hooks/useWindowSize";
import * as S from "components/Process/ProcessStep/ProcessStep.styled";
import { Bolts } from "components/ui/Bolts";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";

export const ProcessStep = ({ isFinal, processStep }) => {
	const { scrollHeight } = useScrollHeight();
	const { isMobile } = useWindowSize();
	const processStepRef = useRef();
	const [offsetY, setOffsetY] = useState(0);

	console.log({ isMobile });

	useEffect(() => {
		const parentMaxScroll =
			processStepRef.current.parentElement.offsetTop +
			processStepRef.current.parentElement.offsetHeight -
			(processStepRef.current.offsetTop +
				processStepRef.current.offsetHeight);

		const refScroll = Math.max(
			0,
			window.scrollY -
				300 -
				(processStepRef.current.offsetTop +
					processStepRef.current.offsetHeight)
		);

		setOffsetY(Math.min(refScroll, parentMaxScroll));
	}, [scrollHeight]);

	return (
		<S.ProcessStep
			isMobile={isMobile}
			ref={processStepRef}
			offsetY={offsetY}
			isFinal={isFinal}
		>
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

					<Column.Actions>
						{/* {JSON.stringify(processStep.action)} */}
						{processStep.action}
					</Column.Actions>
				</Column>
			</S.ProcessCaption>
			<S.ProcessStepVisual>
				<Bolts />
				<S.ProcessStepImage>
					<GatsbyImage
						style={{
							width: 360,
							height: 320,
							filter: "grayscale(100%)",
							mixBlendMode: "multiply",
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
