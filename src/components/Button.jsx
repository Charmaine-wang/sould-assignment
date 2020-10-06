import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
	display: flex;
	height: 45px;
	width: ${({ btnWidth }) => (btnWidth ? btnWidth : '136px')};
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border-radius: 5px;
	border-color: ${({ active, theme }) =>
		active ? theme.color.darkPrimary : theme.color.darkGray};
	border-style: solid;
	margin: 30px 12px 18px;
	transition: 0.35s ease-in-out;
	cursor: pointer;
	:focus,
	:active,
	:hover {
		outline: none;
	}
`;
const LightButton = styled(DefaultButton)`
	border-color: #fff;
	color: #fff;
	:focus,
	:active,
	:hover {
		background-color: #fff;
		color: ${({ theme }) => theme.color.darkPrimary};
		outline: none;
		opacity: 0.9;
	}
`;
const DarkButton = styled(DefaultButton)`
	background-color: ${({ theme }) => theme.color.darkPrimary};
	color: #fff;
	:focus,
	:active,
	:hover {
		outline: none;
	}
`;

export const Button = ({ typestyle, label, active = false, ...rest }) => {
	switch (typestyle) {
		case 'light':
			return (
				<LightButton {...rest} active={active}>
					{label}
				</LightButton>
			);
		case 'dark':
			return (
				<DarkButton {...rest} active={active}>
					{label}
				</DarkButton>
			);
		default:
			return (
				<DefaultButton {...rest} active={active}>
					{label}
				</DefaultButton>
			);
	}
};
