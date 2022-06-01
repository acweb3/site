import { Add32 } from "@carbon/icons-react";
import * as S from "components/FAQ/FAQ.styled";
import { useState } from "react";

const QUESTIONS_ANSWERS = [
	[
		"what do you charge for a mint site? or a discord build?",
		"it depends!  we handle projects big and small, but we typically take a flat, trivial deposit of eth of front followed by 5-8% of mint, depending on scope.",
	],
	[
		"will you be available on my project's mint day?",
		"always.  we never schedule a project that has a conflicting launch date.",
	],
	[
		"what happens after the initial mint?",
		"we still stick around!  as technical stewards, we're always down to offer technical support.  we're in the business of making sure that our clients come back for future builds.",
	],
];

export const FAQ = () => {
	const [answerIndex, setAnswerIndex] = useState(undefined);

	return (
		<S.FAQ>
			{QUESTIONS_ANSWERS.map(([question, answer], index) => {
				return (
					<S.FAQPoint key={index}>
						<S.FAQQuestion
							onClick={() =>
								setAnswerIndex(
									answerIndex === index ? undefined : index
								)
							}
						>
							<S.FAQQuestionContent>
								{question}
							</S.FAQQuestionContent>

							<S.FAQQuestionExpand
								isActive={answerIndex === index}
							>
								<Add32 />
							</S.FAQQuestionExpand>
						</S.FAQQuestion>
						{answerIndex === index && (
							<S.FAQAnswer>{answer}</S.FAQAnswer>
						)}
					</S.FAQPoint>
				);
			})}
		</S.FAQ>
	);
};
