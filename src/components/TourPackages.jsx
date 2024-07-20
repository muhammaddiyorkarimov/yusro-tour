import React from 'react';
import images from '../images';
import Title from '../ui/Title';
import './styles/tourPackages.css';

function TourPackages() {
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
							<li><i className="fa-solid fa-check"></i> Paket Davomiyligi: (10-14 Day)</li>
							<li><i className="fa-solid fa-check"></i> Besh yulduzli mehmonxonada turar joy</li>
							<li><i className="fa-solid fa-check"></i> Shaxsiy Hojiboshi bilan bo'ling</li>
							<li><i className="fa-solid fa-check"></i> Shaxsiy VIP avtobuslardan foydalaning</li>
						</ul>
						<button className="order-btn">BUYURTMA QILING</button>
					</div>
				</div>
				<div className="package">
					<div className="package-image">
						<img src={images.categoryCard2} alt="Standard Package" />
					</div>
					<div className="package-content">
						<h3>STANDART</h3>
						<span className="price">$900</span>
						<ul>
							<span>O'z ichiga oladi:</span>
							<li><i className="fa-solid fa-check"></i> Paket Davomiyligi: (10-14 Day)</li>
							<li><i className="fa-solid fa-check"></i> Besh yulduzli mehmonxonada turar joy</li>
							<li><i className="fa-solid fa-check"></i> Shaxsiy Hojiboshi bilan bo'ling</li>
							<li><i className="fa-solid fa-check"></i> Shaxsiy VIP avtobuslardan foydalaning</li>
						</ul>
						<button className="order-btn">BUYURTMA QILING</button>
					</div>
				</div>
				<div className="package">
					<div className="package-image">
						<img src={images.categoryCard3} alt="Econom Package" />
					</div>
					<div className="package-content">
						<h3>EKONOM</h3>
						<span className="price">$1100</span>
						<ul>
							<span>O'z ichiga oladi:</span>
							<li><i className="fa-solid fa-check"></i> Paket Davomiyligi: (10-14 Day)</li>
							<li><i className="fa-solid fa-check"></i> Besh yulduzli mehmonxonada turar joy</li>
							<li><i className="fa-solid fa-check"></i> Shaxsiy Hojiboshi bilan bo'ling</li>
							<li><i className="fa-solid fa-check"></i> Shaxsiy VIP avtobuslardan foydalaning</li>
						</ul>
						<button className="order-btn">BUYURTMA QILING</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TourPackages;
