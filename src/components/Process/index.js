import * as S from "components/Process/Process.styled";

export const Process = () => {
	return (
		<S.Process id="the-process">
			<S.ProcessSteps></S.ProcessSteps>
			<S.ProcessBanner>
				<S.ProcessBannerCopy>the process →</S.ProcessBannerCopy>
			</S.ProcessBanner>
		</S.Process>
	);
};
