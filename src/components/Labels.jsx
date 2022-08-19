import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Labels() {
	const { labels, updateLabel } = useContext(GlobalContext);

	return (
		<>
			<p className='text-slate-400 font-bold mt-10'>Labels</p>
			{labels.map(({ label: lbl, checked }, idx) => (
				<label key={idx} className='mt-3 block'>
					<input
						type='checkbox'
						checked={checked}
						onChange={() => updateLabel({ label: lbl, checked: !checked })}
						className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
					/>
					<span className='ml-2 text-gray-700 capitalize'>{lbl}</span>
				</label>
			))}
		</>
	);
}

export default Labels;
