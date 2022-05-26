import { useWindowListener } from "common/hooks/useWindowListener";
import { Clocks } from "components/Clocks";
import * as S from "components/Header/Header.styled";
import { HeaderMarquee } from "components/Header/HeaderMarquee";
import { Bolts } from "components/ui/Bolts";
import { Column } from "components/ui/Column";
import { CoolCircle } from "components/ui/CoolCircle";
import { useEffect, useState } from "react";

export const Header = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		const sto = setTimeout(() => {
			setIsCollapsed(true);
		}, 8000);

		return () => {
			clearTimeout(sto);
		};
	}, []);

	useWindowListener(
		"scroll",
		(e) => {
			e.preventDefault();

			if (!isCollapsed) {
				setIsCollapsed(true);
			}
		},
		[isCollapsed]
	);

	return (
		<S.Header>
			<HeaderMarquee isCollapsed={isCollapsed} />
			<S.HeaderInfoOffset>
				<S.HeaderInfo isCollapsed={isCollapsed}>
					<Bolts
						css={`
							margin-bottom: 32px;
						`}
					/>
					<Clocks />
					<Column
						css={`
							margin-left: auto;
							margin-right: auto;
							max-width: 880px;
							text-align: center;
						`}
					>
						<S.HeaderBigAssHeader>
							<CoolCircle>we create</CoolCircle>
							code,
							<br />
							community,
							<br />
							and cool stuff
						</S.HeaderBigAssHeader>
						<Column.Text
							css={`
								font-size: ${(props) =>
									props.theme.fontSize.h4};
								line-height: 0.95;
							`}
						>
							we're a full-service web3 studio. we build discords,
							write smart contracts, and develop websites for nft
							projects.
						</Column.Text>
					</Column>
					<Bolts
						css={`
							margin-top: 32px;
						`}
					/>
				</S.HeaderInfo>
			</S.HeaderInfoOffset>
		</S.Header>
	);
};
