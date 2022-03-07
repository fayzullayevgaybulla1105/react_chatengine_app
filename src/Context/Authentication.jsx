import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [state, setState] = React.useState(
		(window.localStorage.getItem('username')) || false,
	);

	React.useEffect(() => {
		if (state) {
			window.localStorage.setItem('username', JSON.stringify(state));
		} else {
			window.localStorage.removeItem('username');
		}
	}, [state]);

	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	);
}

export { Context, Provider };