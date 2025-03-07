import './Tooltip.scss';
import React from 'react';
import Neuron from './Neuron';

function Tooltip({ text, neuron, onChange, index, expansions }) {
	return (
		<div className='Tooltip' data-tooltip={text}>
			<Neuron expansions={expansions} truncate={true} neuron={neuron} onChange={() => onChange(index)} small />
		</div>
	);
}

export default Tooltip;
