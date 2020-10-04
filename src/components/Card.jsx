import React from 'react';
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

	> p {
		color: ${({ theme }) => theme.color.darkPrimary};
	}
`;

export const Card = ({ imgUrl, label }) => {
	return (
		<StyledCard>
			<img src={imgUrl} alt="" />
			<p>{label}</p>
		</StyledCard>
	);
};
