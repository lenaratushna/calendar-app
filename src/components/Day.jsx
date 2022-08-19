import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

function Day({ day, rowIdx }) {
	const [dayEvents, setDayEvents] = useState([]);
	const {
		setDaySelected,
		setShowEventModal,
		filteredEvents,
		setSelectedEvent,
	} = useContext(GlobalContext);

	useEffect(() => {
		const events = filteredEvents.filter(
			(evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
		);
		setDayEvents(events);
	}, [filteredEvents, day]);

	function getCurrentDayClass() {
		return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
			? 'bg-teal-500 text-white rounded-full w-7'
			: '';
	}

	return (
		<div className='border border-slate-200 flex flex-col'>
			<div className='flex flex-col items-center'>
				{rowIdx === 0 && (
					<p className='w-full mb-1 text-slate-700 bg-sky-200'>
						{day.format('ddd')}
					</p>
				)}
				<p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
					{day.format('DD')}
				</p>
			</div>
			<div
				className='flex-1 cursor-pointer'
				onClick={() => {
					setDaySelected(day);
					setShowEventModal(true);
				}}
			>
				{dayEvents.map((evt, idx) => (
					<div
						key={idx}
						onClick={() => setSelectedEvent(evt)}
						className={`bg-${evt.label}-200 p-1 mx-3 text-gray-600 text-sm rounded mb-1 truncate`}
					>
						{evt.title}
					</div>
				))}
			</div>
		</div>
	);
}

export default Day;
