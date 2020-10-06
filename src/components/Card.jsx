import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 168px;
	height: 192px;
	border: 2px solid;
	border-color: ${({ active, theme }) =>
		active ? theme.color.darkPrimary : theme.color.darkGray};
	border-radius: 10px;
	padding: 48px 0 16px;
	margin: 30px 12px 0 12px;
	transition: 0.35s ease-in-out;

	:active,
	:focus,
	:hover {
		border: 2px solid ${({ theme }) => theme.color.darkPrimary};
	}

	> p {
		color: ${({ theme }) => theme.color.darkPrimary};
	}
`;

export const Card = ({ imgUrl, label, onClick, active }) => {
	return (
		<StyledCard onClick={onClick} active={active}>
			<img src={imgUrl} alt="" />
			<p>{label}</p>
		</StyledCard>
	);
};
