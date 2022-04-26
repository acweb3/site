import React from "react";

import * as S from "./styled";

export const Body = () => {
	return (
		<S.BodySection>
			<S.BodyContent>
				<S.ParagraphWrapper>
					<S.SectionHeader>
						<div>Who</div>
						<div>we</div>
						<div>are</div>
					</S.SectionHeader>

					<S.SectionContent>
						<S.Paragraph>
							with what feels like a century each of crypto and
							web3 experience, andrew and cooper bring a
							comprehensive approach that integrates culture,
							strategy, and design
						</S.Paragraph>
						<S.Paragraph>
							artists, creators, and founders are driving a
							revolution in expression and ownership. your work
							isn't just another product off the shelf — your
							website shouldn't be either.
						</S.Paragraph>
					</S.SectionContent>
				</S.ParagraphWrapper>
			</S.BodyContent>
		</S.BodySection>
	);
};
