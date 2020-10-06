import React from 'react';
import styled from 'styled-components';

const StyledVideoCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 55px 48px;
	background-color: black;
	width: 100%;
	height: 100%;
	min-height: 380px;
	border-radius: 20px;

	&::before {
		content: '';
		background-image: url('/images/car.jpg');
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: cover;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		opacity: 0.85;
		border-radius: 20px;
	}

	> h2 {
		color: #fff;
	}
`;

export const VideoCard = () => {
	return (
		<StyledVideoCard>
			<h2>Följ med på vår roadtrip och filmserie genom Västverige</h2>
		</StyledVideoCard>
	);
};
