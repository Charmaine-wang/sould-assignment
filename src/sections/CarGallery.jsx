import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Card } from '../components/Card';
import { Button } from '../components/Button';

const StyledCarGallery = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	div {
		display: flex;
		margin-bottom: 16px;
	}
`;

export const CarGallery = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log('mounted');
	}, []);

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
		</StyledCarGallery>
	);
};