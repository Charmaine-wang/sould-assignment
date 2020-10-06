import React from 'react';
import styled from 'styled-components';

import { BookingCard } from '../components/BookingCard';
import { VideoCard } from '../components/VideoCard';
const StyledFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 120px;
	justify-content: center;
	width: 100%;
	margin: 80px 0;

	> span {
		width: 100%;
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: 1200px) {
			flex-direction: column;
			align-items: center;
			height: inherit;
		}

		> div {
			width: 100%;
			max-width: calc(50% - 8px);
			height: auto;

			@media screen and (max-width: 1200px) {
				max-width: 80%;
				margin-bottom: 16px;
			}
		}
	}
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<span>
				<BookingCard />
				<VideoCard />
			</span>
		</StyledFooter>
	);
};
