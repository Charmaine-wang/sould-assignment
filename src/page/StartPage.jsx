import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Hero } from '../sections/Hero';
import { CarGallery } from '../sections/CarGallery';
import { Footer } from '../sections/Footer';
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

const StartPage = () => {
	const [isClicked, setClicked] = useState(false);
	return (
		<StyledStartPage>
			<Hero />
			<CarGallery />
			<Footer />
		</StyledStartPage>
	);
};

export default StartPage;
