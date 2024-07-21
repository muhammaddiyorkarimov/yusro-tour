import './styles/ourAmenities.css'
import { useEffect, useState } from 'react';
import images from '../images';
import Title from '../ui/Title';
import TotalCommand from '../service/TotalCommand';

function OurAmenities() {

	const [amenities, setAmenities] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchAmenities() {
			try {
				const data = await TotalCommand.getAmenities();
				setAmenities(data);
			} catch (error) {
				setError(error);
			}
		}

		fetchAmenities()
	}, [])



	return (
		<div className='our-amenities'>
			<div className="container">
				<div className="amenities-title">
					<div className="cards">
						<div className="card">
							<img src={images.kabah} alt="" />
							<p>Umra <span>(Ro'yxatdan O'tish)</span></p>
							<i className="fa-solid fa-arrow-right"></i>
						</div>
						<div className="card card2">
							<img src={images.mosque2} alt="" />
							<p>35% Chegirmali Paket</p>
						</div>
					</div>
				</div>

				<div style={{paddingTop: "80px"}}>
					<Title img={images.kabah} title="Qulayliklarimiz" description="Haj va Umra ziyoratlarini birlashtirishda yuqori tajribaga ega" />
				</div>

				<div className="amenities-grid">
					{amenities && amenities.map(amenity => (
						<div key={amenity.id} className="amenity-card">
							<img src={amenity.image} alt={amenity.title} className="amenity-image" />
							<p>{amenity.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default OurAmenities