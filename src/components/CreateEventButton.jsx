import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function CreateEventButton() {
	const { setShowEventModal } = useContext(GlobalContext);

	return (
		<button
			onClick={() => setShowEventModal(true)}
			className='border p-2 rounded-full flex items-center shadow-md'
		>
			<span className='px-4 text-slate-500'>Create Event</span>
		</button>
	);
}

export default CreateEventButton;
