import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSmallButton = styled.button`
	display: flex;
	padding: 0 8px;
	/* width: ${({ btnWidth }) => (btnWidth ? btnWidth : '72px')}; */
	font-size: 12px;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	border-radius: 5px;
	border-color: #fff;
	color: ${({ theme }) => theme.color.darkGray};
	border-style: solid;
	margin: 24px 2px 0;
	:focus,
	:active {
		outline: none;
		border-color: ${({ theme }) => theme.color.darkPrimary};
		color: ${({ theme }) => theme.color.darkPrimary};
	}
`;

export const SmallButton = ({ label, ...rest }) => {
	return <StyledSmallButton>{label}</StyledSmallButton>;
};

export default SmallButton;
