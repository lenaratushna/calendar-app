import React from 'react';
import dayjs from 'dayjs';

function Day({ day, rowIdx }) {
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
		</div>
	);
}

export default Day;
