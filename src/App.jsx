import { useState, useContext, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';

import './App.css';
import EventModal from './components/EventModal';

function App() {
	const [ currentMonth, setCurrentMonth ] = useState(() => getMonth());
	const { monthIndex, showEventModal } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
	}, [monthIndex]);

	return (
		<>
            {showEventModal &&  <EventModal />}
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
