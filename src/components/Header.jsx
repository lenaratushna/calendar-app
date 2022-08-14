import React, { useContext } from 'react';
import logo from '../assets/calendar.png';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

function Header() {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);

	const handlePrevMonth = () => {
		setMonthIndex(monthIndex - 1);
	};
	const handleNextMonth = () => {
		setMonthIndex(monthIndex + 1);
	};
	const handleReset = () => {
		setMonthIndex(
			monthIndex === dayjs().month()
				? monthIndex + Math.random()
				: dayjs().month()
		);
	};

	return (
		<header className='py-3 flex items-center'>
			<img src={logo} alt='calendar' className='mr-2 w-12 h-12' />
			<h1 className='text-slate-400 text-xl font-bold mr-10'>My Calendar</h1>
			<button className='border border-2 border-blue-500/50 text-blue-500/80 rounded py-2 px-4 mr-5'>
				Today
			</button>
			<button onClick={handlePrevMonth}>
				<span className='material-icons-outlined cursor-pointer text-gray-600 mx-2 flex items-center'>
					chevron_left
				</span>
			</button>
			<button onClick={handleNextMonth}>
				<span className='material-icons-outlined cursor-pointer text-gray-600 mx-2 flex items-center'>
					chevron_right
				</span>
			</button>
			<h2 className='ml-4 text-xl text-teal-500 font-bold'>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h2>
		</header>
	);
}

export default Header;
