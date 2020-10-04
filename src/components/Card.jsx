import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 168px;
	height: 192px;
	border: 2px solid ${({ theme }) => theme.color.darkGray};
	border-radius: 10px;
	padding: 48px 0 16px;
	margin: 0 12px;
`;

export const Card = ({ imgUrl, label }) => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log('mounted');
	}, []);

	return (
		<StyledCard>
			<img src={imgUrl} alt="" />
			<p>{label}</p>
		</StyledCard>
	);
};
