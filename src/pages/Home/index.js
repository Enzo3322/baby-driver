import React from 'react';
import { Shelve } from '../../components/Shelve';
import { frota } from '../../services/api';

export const Home = () => {
	return (
		<div>
			{frota.map((category, index) => (
				<Shelve key={index} category={frota[index]} />
			))}
		</div>
	);
};
