import { Clocks } from "components/Clocks";
import * as S from "components/Header/Header.styled";
import { HeaderLogo } from "components/Header/HeaderLogo";
import { HeaderMarquee } from "components/Header/HeaderMarquee";
import { Column } from "components/ui/Column";
import { useEffect, useState } from "react";

export const Header = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		const sto = setTimeout(() => {
			setIsCollapsed(true);
		}, 2000);

		return () => {
			clearTimeout(sto);
		};
	}, []);

	return (
		<S.Header>
			<HeaderMarquee isCollapsed={isCollapsed} />
			<S.HeaderInfoGradient>
				<S.HeaderInfo isCollapsed={isCollapsed}>
					<Clocks />
					<Column
						css={`
							margin-left: auto;
							margin-right: auto;
							flex: 0 0 480px;
							padding-bottom: 72px;
							text-align: center;
						`}
					>
						<S.HeaderBigAssHeader>
							code,{" "}
							<S.HeaderLogoBoltWrapper>
								<S.HeaderLogoBolt />
							</S.HeaderLogoBoltWrapper>{" "}
							community, cool stuff
						</S.HeaderBigAssHeader>
						<Column.Text
							css={`
								font-size: ${(props) =>
									props.theme.fontSize.h4};
							`}
						>
							we're a full-service web3 studio. we build discords,
							write smart contracts, and develop websites for nft
							projects.
						</Column.Text>
					</Column>

					{/* <Column
						css={`
							flex: 0 0 360px;
							padding-bottom: 48px;
							margin-left: 120px;
							margin-right: auto;
						`}
					>
						<Column.Header main>
							web3 enabled development
						</Column.Header>
						<Column.Text>
							we write everything from smart contracts to
							marketplaces to auction sites. we can help you to
							truly own your crypto project and present it to the
							world in a way that matches your brand excellence.
						</Column.Text>

						<Column.Header main>
							community development activations
						</Column.Header>
						<Column.Text>
							craft experiences for your community that are as
							unique as you are, along with tools like custom
							discord community hubs and informed strategy
							consulting.
						</Column.Text>
					</Column> */}

					<HeaderLogo />
				</S.HeaderInfo>
			</S.HeaderInfoGradient>
		</S.Header>
	);
};
