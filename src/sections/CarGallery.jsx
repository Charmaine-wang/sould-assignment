import React from 'react';
import styled from 'styled-components';

import { Card } from '../components/Card';
import { Button } from '../components/Button';

const StyledCarGallery = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};

	div {
		display: flex;
	}
`;

const StyledViewAll = styled.div`
	background-color: transparent;
	align-self: flex-end;
	margin-bottom: 20px;
`;

export const CarGallery = () => {
	return (
		<StyledCarGallery>
			<h1>Hitta din nästa drömbil</h1>
			<div>
				<Card label="Personbilar" imgUrl="/images/van.svg" />
				<Card label="Transportbilar" imgUrl="/images/pickup.svg" />
				<Card label="Elbilar" imgUrl="/images/electric.svg" />
				<Card label="Hybridbilar" imgUrl="/images/hybrid.svg" />
				<Card label="Begagnat" imgUrl="/images/van.svg" />
				<Card label="Nya bilar" imgUrl="/images/pickup.svg" />
			</div>
			<div>
				<Button label="Volvo" btnWidth="168px" />
				<Button label="Renault" btnWidth="168px" />
				<Button label="Dacia" btnWidth="168px" />
				<Button label="Ford" btnWidth="168px" />
				<Button label="Mazda" btnWidth="168px" />
				<Button label="Volvo" btnWidth="168px" />
			</div>
			<Button label="Visa bilar" typestyle="dark" />
			<StyledViewAll>Se alla bilar i lager</StyledViewAll>
			{/* <hr /> */}
		</StyledCarGallery>
	);
};
