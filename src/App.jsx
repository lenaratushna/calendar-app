import { useState, useContext, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';

import './App.css';

function App() {
	const [currentMonth, setCurrentMonth] = useState(() => getMonth());
	const { monthIndex } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	}, [monthIndex]);

	return (
		<>
			<div className='h-screen flex flex-col'>
				<Header />
				<div className='flex flex-1'>
					<Sidebar />
					<Month month={currentMonth} />
				</div>
			</div>
		</>
	);
}

export default App;
