import React from 'react';
import styled from 'styled-components';

import { SmallButton } from './SmallButton';
const StyledBookingCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 55px 55px 55px 50px;
	background-color: #eef1f4;
	border-radius: 20px;

	p {
		color: ${({ theme }) => theme.color.darkGray};
		margin-top: 50px;
	}
	> div {
		display: flex;
		justify-content: space-between;
	}
`;
const StyledFirstColumn = styled.div`
	display: flex;
	flex-direction: row;
	display: flex;
	img {
		clip-path: circle(40px at center);
		border: 1px solid ${({ theme }) => theme.color.darkGray};
		width: 84px;
	}
`;
const StyledButtonWrapper = styled.div`
	display: flex;
`;
const StyledForm = styled.form`
	display: flex;

	img {
		align-self: flex-end;
		margin-right: 20px;
	}
	input {
		border-radius: 10px;
		border: transparent;
		outline: none;
		width: 100%;
		max-width: 66px;
		height: 88px;
		margin: 0 4px;
		font-size: 30px;
		line-height: 35px;
		text-align: center;
		text-transform: uppercase;
	}

	input:nth-child(4) {
		margin-right: 10px;
	}
`;

export const BookingCard = () => {
	return (
		<StyledBookingCard>
			<StyledFirstColumn>
				<div>
					<h2>Boka Verkstad</h2>
					<StyledButtonWrapper>
						<SmallButton label="Service" />
						<SmallButton label="Hjulskifte" />
						<SmallButton label="Byta vindruta" />
					</StyledButtonWrapper>
				</div>
				<img src="images/profile.jpg" alt="" />
			</StyledFirstColumn>
			<p>Fyll i regnummer</p>
			<StyledForm>
				<img src="/images/eu.svg" alt="" />
				<input type="text" maxlength="1" />
				<input type="text" maxlength="1" />
				<input type="text" maxlength="1" />
				<input type="text" maxlength="1" />
				<input type="text" maxlength="1" />
				<input type="text" maxlength="1" />
			</StyledForm>
		</StyledBookingCard>
	);
};
