import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const DefaultButton = styled.button`
	display: flex;
	height: 45px;
	width: ${({ btnWidth }) => (btnWidth ? btnWidth : '136px')};
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border-radius: 5px;
	border-color: ${({ theme }) => theme.color.darkGray};
	border-style: solid;
	margin: 0 12px;
	:focus,
	:active {
		outline: none;
		border-color: ${({ theme }) => theme.color.darkPrimary};
	}
`;
const LightButton = styled(DefaultButton)`
	border-color: #fff;
	color: #fff;
`;
const DarkButton = styled(DefaultButton)`
	background-color: ${({ theme }) => theme.color.darkPrimary};
	border-color: ${({ theme }) => theme.color.darkPrimary};
	color: #fff;
`;

export const Button = ({ typestyle, label, ...rest }) => {
	switch (typestyle) {
		case 'light':
			return <LightButton {...rest}>{label}</LightButton>;
		case 'dark':
			return <DarkButton {...rest}>{label} </DarkButton>;
		default:
			return <DefaultButton {...rest}>{label} </DefaultButton>;
	}
};
