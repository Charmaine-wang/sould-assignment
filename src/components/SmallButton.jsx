import React from 'react';
import styled from 'styled-components';

const StyledSmallButton = styled.button`
	display: flex;
	padding: 0 8px;
	font-size: 12px;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	border-radius: 5px;
	border-color: #fff;
	color: ${({ theme }) => theme.color.darkGray};
	border-style: solid;
	margin: 24px 2px 0;
	transition: 0.075s;
	cursor: pointer;
	:focus,
	:active,
	:hover {
		outline: none;
		border-color: ${({ theme }) => theme.color.darkPrimary};
		color: ${({ theme }) => theme.color.darkPrimary};
	}
`;

export const SmallButton = ({ label, ...rest }) => {
	return <StyledSmallButton>{label}</StyledSmallButton>;
};

export default SmallButton;
