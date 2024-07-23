import './haj.css'
import ExtraPagesHeader from './../../components/ExtraPagesHeader';
import ContactUs from './../../components/ContactUs';
import TourPackage from '../../components/TourPackage';
import AnswerToQuestions from '../../components/AnswerToQuestions';

function Haj() {
	return (
		<div className='haj-page'>
			<ExtraPagesHeader title="Haj" />
			<div className="container">
				<div className="haj-about">
					<TourPackage/>
				</div>
				<div className="items">
					<ContactUs />
					<AnswerToQuestions/>
				</div>
			</div>
		</div>
	)
}

export default Haj