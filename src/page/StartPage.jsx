import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
const StyledStartPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	img {
		max-width: 100%;
		height: auto;
	}
`;
const StyledbuttonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
`;

const StartPage = () => {
	const [isClicked, setClicked] = useState(false);
	return (
		<StyledStartPage>
			<h1>Vi finns i din närhet</h1>
			<StyledbuttonWrapper>
				<Button onClick={() => setClicked(!isClicked)} label="Bilar i lager" />
				<Button
					onClick={() => setClicked(!isClicked)}
					label="Boka verkstad"
					typestyle="dark"
				/>
			</StyledbuttonWrapper>
			<img src="/images/start.jpg" alt="" />

			<h1>Hitta din nästa drömbil</h1>
		</StyledStartPage>
	);
};

export default StartPage;
