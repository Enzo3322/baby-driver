import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { FAQ } from '../pages/Institutional/FAQ';
import { SAQ } from '../pages/Institutional/SAQ';
import { TERMS } from '../pages/Institutional/TERMS';
import { Search } from '../pages/Search';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/busca" element={<Search />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/institucional/faq" element={<FAQ />} />
				<Route path="/institucional/saq" element={<SAQ />} />
				<Route path="/institucional/termos" element={<TERMS />} />
			</Routes>
		</BrowserRouter>
	);
};
