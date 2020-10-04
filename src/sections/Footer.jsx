import React from 'react';
import styled from 'styled-components';

import { BookingCard } from '../components/BookingCard';
import { VideoCard } from '../components/VideoCard';
const StyledFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 140px;
	justify-content: space-between;
	width: 100%;
	height: 328px;
	margin: 80px 0;
	> div {
		width: 50%;
		margin: 16px;
	}
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<BookingCard />
			<VideoCard />
		</StyledFooter>
	);
};
