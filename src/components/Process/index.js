import * as S from "components/Process/Process.styled";
import { ProcessStep } from "components/Process/ProcessStep";
import { useProcessStepsQuery } from "graphql/queries/useProcessStepsQuery";

export const Process = () => {
	const {
		allFile: { edges },
	} = useProcessStepsQuery();
	const processStepsSrc = edges.map(({ node }) => node);
	const processSteps = processStepsSrc;

	return (
		<S.Process id="the-process">
			<S.ProcessBanner>
				<S.ProcessBannerCopy>the process →</S.ProcessBannerCopy>
			</S.ProcessBanner>
			<S.ProcessSteps>
				{processSteps.map((processStep, i) => (
					<ProcessStep key={i} processStep={{ ...processStep }} />
				))}
			</S.ProcessSteps>
		</S.Process>
	);
};
