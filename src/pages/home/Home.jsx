import { Link } from 'react-router-dom'
import './home.css'
import Category from '../../components/Category'
import images from '../../images'
import OurAmenities from './../../components/OurAmenities';
import AgencyExperience from '../../components/AgencyExperience';
import ContactUs from '../../components/ContactUs';
import TourPackages from '../../components/TourPackages';
import Opinion from '../../components/Opinion';
import ContactAboutSection from '../../components/ContactAboutSection';
import Partners from '../../components/Partners';
import News from '../../components/News';
import ExperienceAbout from '../../components/ExperienceAbout';

function Home() {
	return (
		<div className='home'>
			<div className="agency-about">
				<div className="container">
					<span>Haj & umra turizm agentligi</span>
					<h1>yusro agentligining <br />rasmiy sahifasiga <br /> xush kelibsiz!</h1>
					<Link>Bizning paketlarimiz</Link>
				</div>
			</div>
			{/* category */}
			<Category />

			{/* experience */}
			<div style={{marginTop: '350px'}} className="agency-experience2 container">
				<div className="image">
					<div className="image-wrapper">
						<img src={images.imageWrapper} alt="" />
					</div>
					<img src={images.forImageWrapper} alt="" className='for-wrapper' />
				</div>
				<ExperienceAbout/>
			</div>

			{/* amenities */}
			<OurAmenities />

			{/* agency ecperience */}
			<AgencyExperience />

			{/* contact */}
			<div className="contact-us">
				<div className="container">
					<ContactAboutSection />
					<ContactUs />
				</div>
			</div>

			{/* TourPackages */}
			<TourPackages />

			{/* opinon */}
			<Opinion />

			{/* partners */}
			<Partners/>

			{/* news */}
			<News/>
		</div>
	)
}

export default Home