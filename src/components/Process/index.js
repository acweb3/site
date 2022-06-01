import {
	Checkmark16,
	Document16,
	FaceSatisfied16,
	GroupPresentation16,
	Idea16,
	RequestQuote16,
	TextNewLine16,
} from "@carbon/icons-react";
import * as S from "components/Process/Process.styled";
import { ProcessStep } from "components/Process/ProcessStep";
import { BaseButton } from "components/ui/BaseButton";
import { useProcessStepsQuery } from "graphql/queries/useProcessStepsQuery";

const PROCESS_STEPS = [
	{
		bubble: (
			<>
				<FaceSatisfied16 />1 — say hi
			</>
		),
		header: "reach out — tell us what you're thinking",
		body: "feel free to reach out about any questions regarding what we can do for you, what we charge, and past work.  we can always point you in the right direction within our network of builders.",
		action: <BaseButton icon={<TextNewLine16 />}>say hi</BaseButton>,
	},
	{
		bubble: (
			<>
				<GroupPresentation16 />2 — let's sync
			</>
		),
		header: "set up an initial meeting to go over your vision",
		body: "we'll go over the best technical paths forward for smart contracts, community engagement, and site design.  we can go over approaches for anything from a commercial 10K to a limited fine art drop.",
		action: <BaseButton icon={<Idea16 />}>learn more</BaseButton>,
	},
	{
		bubble: (
			<>
				<RequestQuote16 />3 — let's think
			</>
		),
		header: "we draw up a proposal for your project",
		body: "we'll include specifications and visual mockups and let you know what has worked for our clients in the past. we'll offer a tailored spec according to the unique needs of your project.",
		action: <BaseButton icon={<Document16 />}>see a proposal</BaseButton>,
	},
	{
		bubble: (
			<>
				<Checkmark16 />4 — jamming
			</>
		),
		header: "we get the job done",
		body: "after you approve our proposal, we get right to work.  we'll set up a channel of communciation to keep you updated along the way. we'll take your project to the top of opensea",
		action: (
			<BaseButton icon={<TextNewLine16 />}>
				learn about our past work
			</BaseButton>
		),
	},
];

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
						isFinal={i === processSteps.length - 1}
						processStep={{ ...processStep, ...PROCESS_STEPS[i] }}
					/>
				))}
			</S.ProcessSteps>
		</S.Process>
	);
};
