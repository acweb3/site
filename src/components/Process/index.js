import * as S from "components/Process/Process.styled";
import { ProcessStep } from "components/Process/ProcessStep";
import { useProcessStepsQuery } from "graphql/queries/useProcessStepsQuery";

export const Process = () => {
	const {
		allFile: { edges },
	} = useProcessStepsQuery();
	const processSteps = edges.map(({ node }) => node);

	return (
		<S.Process id="the-process">
			<S.ProcessSteps>
				{processSteps.map((processStep, i) => (
					<ProcessStep
						key={i}
						words={i}
						isFinal={i === processSteps.length - 1}
						processStep={{ ...processStep }}
					/>
				))}
			</S.ProcessSteps>
		</S.Process>
	);
};
