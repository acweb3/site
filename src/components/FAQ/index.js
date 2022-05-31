import { Add32 } from "@carbon/icons-react";
import * as S from "components/FAQ/FAQ.styled";
import { useState } from "react";

const QUESTIONS_ANSWERS = [
	[
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
