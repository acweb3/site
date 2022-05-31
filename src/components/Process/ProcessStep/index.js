import { useScrollHeight } from "common/hooks/useScrollHeight";
import * as S from "components/Process/ProcessStep/ProcessStep.styled";
import { Bolts } from "components/ui/Bolts";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";

export const ProcessStep = ({ isFinal, processStep }) => {
	const { scrollHeight } = useScrollHeight();
	const processStepRef = useRef();
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		// current offset with 45px buffer
		const maxScroll =
			processStepRef.current.offsetTop +
			processStepRef.current.offsetHeight * 2 +
			0;

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
		<S.ProcessStep ref={processStepRef} offsetY={offsetY} isFinal={isFinal}>
			<S.ProcessCaption>
				<Column
					css={`
						flex: 0 0 360px;
						height: 100%;
						padding-bottom: 48px;
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
