import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import StartPage from './page/StartPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

function App() {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<div className="App">
					<StartPage />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
