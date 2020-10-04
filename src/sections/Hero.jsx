import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';

const StyledHero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> h1 {
		margin-bottom: 48px;
	}

	> h2 {
		position: absolute;
		bottom: 20px;
	}
`;
const StyledbuttonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
`;

const StyledImgText = styled.div`
	position: absolute;
	bottom: 60px;
	right: 15%;
	color: #fff;
	width: 350px;
	border-left: 1px solid #fff;
	padding: 20px 0 0 48px;
`;

export const Hero = () => {
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
			<StyledImgText>
				<h2>Spetsa din roadtrip med nya sommardäck</h2>
				<Button label="Köp däck" typestyle="light" />
			</StyledImgText>
		</StyledHero>
	);
};
