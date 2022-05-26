import React, { useState } from 'react';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const Shelve = ({ category }) => {
	const [clicked, setClick] = useState(null);

	const toogle = (index) => {
		if (clicked === index) {
			//if clicked question is already active, then close it
			return setClick(null);
		}
		setClick(index);
	};
	return (
		<>
			<div>
				<h2>{category.nome}</h2>
			</div>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Autoplay]}
				className="shelve-container"
			>
				{category.veiculos.map((veiculo, index) => (
					<SwiperSlide key={index}>
						<div className="item-content">
							<img src={veiculo.urlImagem} alt={veiculo.nome} />
							<span>Blindado: {veiculo.blindado ? 'Sim' : 'Não'}</span>
							<span>
								Passageiros: {category.capacidade.quantidadePassageiros}
							</span>
							<button
								onClick={() => {
									toogle(index);
								}}
							>
								Ver detalhes
							</button>
							{clicked === index &&
								category.acessorios.map((item, index) => (
									<p key={index}>{item.descricao}</p>
								))}
							<span>{veiculo.nome}</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
