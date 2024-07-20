import './aboutUs.css'
import ExtraPagesHeader from './../../components/ExtraPagesHeader';
import ExperienceAbout from './../../components/ExperienceAbout';
import images from '../../images';
import AgencyResults from '../../components/AgencyResults';
import Teams from '../../components/Teams';
import Opinion from './../../components/Opinion';

function AboutUs() {
	return (
		<div className='about-us'>
			{/* ExtraPagesHeader */}
			<ExtraPagesHeader title="Biz haqimizda" />

			{/* ExperienceAbout */}
			<div className="about-us-experience agency-experience2 container">
				<div className="images">
					<img src={images.img21} alt="" />
					<img src={images.img22} alt="" />
				</div>
				<div className="about">
					<ExperienceAbout />
				</div>
			</div>

			{/* AgencyResults */}
			<AgencyResults/>

			{/* teams */}
			<Teams/>

			{/* opinion */}
			<Opinion/>
		</div>
	)
}

export default AboutUs