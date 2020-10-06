import React, { useState } from 'react';
import styled from 'styled-components';

import { Card } from '../components/Card';
import { Button } from '../components/Button';

const StyledCarGallery = styled.div`
	display: flex;

	width: 100%;
	padding-left: 120px;
	padding-right: 120px;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 1024px) {
		padding-left: 80px;
		padding-right: 80px;
	}

	> div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 24px;
		> button {
			margin-top: 0;
		}
	}

	> hr {
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.color.darkGray};
	}
	> button {
		margin-top: 0;
	}
`;

const StyledViewAll = styled.button`
	background-color: transparent;
	border: none;
	align-self: flex-end;
	margin-bottom: 20px;
	transition: 0.35s ease-in-out;
	:hover {
		color: ${({ theme }) => theme.color.darkGray};
	}
	:active,
	:focus {
		outline: none;
	}
`;

export const CarGallery = () => {
	const [selectedCarBrands, setSelectedCarBrands] = useState({});
	const [selectedCarTypes, setSelectedCarTypes] = useState({});
	console.log(selectedCarTypes);

	return (
		<StyledCarGallery>
			<h1>Hitta din nästa drömbil</h1>
			<div>
				<Card
					onClick={() =>
						setSelectedCarTypes({
							...selectedCarTypes,
							privateCars: !selectedCarTypes.privateCars,
						})
					}
					label="Personbilar"
					imgUrl="/images/van.svg"
					active={selectedCarTypes.privateCars}
				/>
				<Card
					onClick={() =>
						setSelectedCarTypes({
							...selectedCarTypes,
							transportCars: !selectedCarTypes.transportCars,
						})
					}
					label="Transportbilar"
					imgUrl="/images/pickup.svg"
					active={selectedCarTypes.transportCars}
				/>
				<Card
					onClick={() =>
						setSelectedCarTypes({
							...selectedCarTypes,
							electricCars: !selectedCarTypes.electricCars,
						})
					}
					label="Elbilar"
					imgUrl="/images/electric.svg"
					active={selectedCarTypes.electricCars}
				/>
				<Card
					onClick={() =>
						setSelectedCarTypes({
							...selectedCarTypes,
							hybridCars: !selectedCarTypes.hybridCars,
						})
					}
					label="Hybridbilar"
					imgUrl="/images/hybrid.svg"
					active={selectedCarTypes.hybridCars}
				/>
				<Card
					onClick={() =>
						setSelectedCarTypes({
							...selectedCarTypes,
							usedCars: !selectedCarTypes.usedCars,
						})
					}
					label="Begagnat"
					imgUrl="/images/van.svg"
					active={selectedCarTypes.usedCars}
				/>
				<Card
					onClick={() =>
						setSelectedCarTypes({
							...selectedCarTypes,
							retailCars: !selectedCarTypes.retailCars,
						})
					}
					label="Nya bilar"
					imgUrl="/images/pickup.svg"
					active={selectedCarTypes.retailCars}
				/>
			</div>
			<div>
				<Button
					onClick={() =>
						setSelectedCarBrands({
							...selectedCarBrands,
							volvo: !selectedCarBrands.volvo,
						})
					}
					label="Volvo"
					btnWidth="168px"
					active={selectedCarBrands.volvo}
				/>
				<Button
					onClick={() =>
						setSelectedCarBrands({
							...selectedCarBrands,
							renault: !selectedCarBrands.renault,
						})
					}
					label="Renault"
					btnWidth="168px"
					active={selectedCarBrands.renault}
				/>
				<Button
					onClick={() =>
						setSelectedCarBrands({
							...selectedCarBrands,
							dacia: !selectedCarBrands.dacia,
						})
					}
					label="Dacia"
					btnWidth="168px"
					active={selectedCarBrands.dacia}
				/>
				<Button
					onClick={() =>
						setSelectedCarBrands({
							...selectedCarBrands,
							ford: !selectedCarBrands.ford,
						})
					}
					label="Ford"
					btnWidth="168px"
					active={selectedCarBrands.ford}
				/>
				<Button
					onClick={() =>
						setSelectedCarBrands({
							...selectedCarBrands,
							mazda: !selectedCarBrands.mazda,
						})
					}
					label="Mazda"
					btnWidth="168px"
					active={selectedCarBrands.mazda}
				/>
				<Button
					onClick={() =>
						setSelectedCarBrands({
							...selectedCarBrands,
							saab: !selectedCarBrands.saab,
						})
					}
					label="Saab"
					btnWidth="168px"
					active={selectedCarBrands.saab}
				/>
			</div>
			<Button label="Visa bilar" typestyle="dark" />
			<StyledViewAll>Se alla bilar i lager</StyledViewAll>
			<hr />
		</StyledCarGallery>
	);
};
