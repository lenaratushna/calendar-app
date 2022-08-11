import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import { getMonth } from './util';

import './App.css';

function App() {
	const [currentMonth, setCurrentMonth] = useState(() => getMonth());

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
