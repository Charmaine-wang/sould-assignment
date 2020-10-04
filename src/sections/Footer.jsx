import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	display: flex;
`;

export const Footer = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log('mounted');
	}, []);

	return (
		<StyledFooter>
			<h1>Footer</h1>
		</StyledFooter>
	);
};
