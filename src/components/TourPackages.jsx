import React from 'react';
import images from '../images';
import Title from '../ui/Title';
import './styles/tourPackages.css';
import useFetch from './../hooks/useFetch';
import Travel from '../service/travel';

function TourPackages() {
	const { data, loading, error } = useFetch(Travel.getPlaces);
	console.log(data, error);
	return (
		<div className='tour-packages container'>
			<Title img={images.kabah} title="Bizning tur paketlarimiz" description="Maxsus paketlarni o'tkazib yubormang" />
			<div className="package-buttons">
				<button className="package-btn active">UMRAH</button>
				<button className="package-btn">DUBAI</button>
				<button className="package-btn">SHARM-SHEYX</button>
				<button className="package-btn">TURKEY</button>
			</div>
			<div className="packages">
				<div className="package">
					<div className="package-image">
						<img src={images.categoryCard1} alt="Start Package" />
					</div>
					<div className="package-content">
						<h3>START</h3>
						<span className="price">$700</span>
						<ul>
							<span>O'z ichiga oladi:</span>
							<li><i className="fa-solid fa-check"></i> <span>Paket Davomiyligi: (10-14 Day)</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Besh yulduzli mehmonxonada turar joy</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Shaxsiy Hojiboshi bilan bo'ling</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Shaxsiy VIP avtobuslardan foydalaning</span></li>
						</ul>
						<button className="order-btn">BUYURTMA QILING</button>
					</div>
				</div>
				<div className="package">
					<div className="package-image">
						<img src={images.categoryCard2} alt="Start Package" />
					</div>
					<div className="package-content">
						<h3>START</h3>
						<span className="price">$700</span>
						<ul>
							<li><i className="fa-solid fa-check"></i> <span>Paket Davomiyligi: (10-14 Day)</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Besh yulduzli mehmonxonada turar joy</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Shaxsiy Hojiboshi bilan bo'ling</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Shaxsiy VIP avtobuslardan foydalaning</span></li>
						</ul>
						<button className="order-btn">BUYURTMA QILING</button>
					</div>
				</div>
				<div className="package">
					<div className="package-image">
						<img src={images.categoryCard3} alt="Start Package" />
					</div>
					<div className="package-content">
						<span className="price">$700</span>
						<h3>START</h3>
						<ul>
							<li><i className="fa-solid fa-check"></i> <span>Paket Davomiyligi: (10-14 Day)</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Besh yulduzli mehmonxonada turar joy</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Shaxsiy Hojiboshi bilan bo'ling</span></li>
							<li><i className="fa-solid fa-check"></i> <span>Shaxsiy VIP avtobuslardan foydalaning</span></li>
						</ul>
						<button className="order-btn">BUYURTMA QILING</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TourPackages;
