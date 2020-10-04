import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';

const StyledHero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const StyledbuttonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
`;

export const Hero = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log('mounted');
	}, []);

	return (
		<StyledHero>
			<h1>Vi finns i din närhet</h1>
			<StyledbuttonWrapper>
				<Button
					// onClick={() => setClicked(!isClicked)}
					label="Bilar i lager"
				/>
				<Button
					// onClick={() => setClicked(!isClicked)}
					label="Boka verkstad"
					typestyle="dark"
				/>
			</StyledbuttonWrapper>
			<img src="/images/start.jpg" alt="" />
		</StyledHero>
	);
};
