import { FaceSatisfied16 } from "@carbon/icons-react";
import { useScrollHeight } from "common/hooks/useScrollHeight";
import * as S from "components/Process/ProcessStep/ProcessStep.styled";
import { Bolts } from "components/ui/Bolts";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";

export const ProcessStep = ({ isFinal, processStep, words }) => {
	const { scrollHeight } = useScrollHeight();
	const processStepRef = useRef();
	const [offset, setOffset] = useState({ offsetY: 0, isVisible: true });

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

		setOffset({
			offsetY: Math.min(refScroll, parentMaxScroll),
			isVisible: window.scrollY < maxScroll,
		});
	}, [scrollHeight]);

	return (
		<S.ProcessStep
			ref={processStepRef}
			offsetY={offset.offsetY}
			// isVisible={offset.isVisible}
			isVisible
			isFinal={isFinal}
		>
			<S.ProcessCaption>
				<Column
					css={`
						flex: 0 0 360px;
					`}
				>
					<Column.Header>
						<CoolCircle isSmall isInverted>
							<FaceSatisfied16 />
							you call us!
						</CoolCircle>
					</Column.Header>
					<Column.Header
						css={`
							font-size: ${(props) => props.theme.fontSize.h4};
							font-family: ${(props) =>
								props.theme.fontFamily.mono};
						`}
					>
						get us on a phonecall — tell us what you need
					</Column.Header>
					<Column.Text
						css={`
							font-family: ${(props) =>
								props.theme.fontFamily.sansSerif};
							margin-top: auto;
						`}
					>
						feel free to reach out about any questions regarding
						what we can do for you, what we charge, and past work.
					</Column.Text>
				</Column>
			</S.ProcessCaption>
			<S.ProcessStepVisual>
				<Bolts />
				<S.ProcessStepImage>
					<GatsbyImage
						style={{
							height: 360,
						}}
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
