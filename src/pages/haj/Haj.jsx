import './haj.css'
import ExtraPagesHeader from './../../components/ExtraPagesHeader';
import ContactUs from './../../components/ContactUs';

function Haj() {
	return (
		<div className='haj'>
			<ExtraPagesHeader />
			<div className="haj-about">
				<div className="container">
					<div className="about">
						
					</div>
					<div className="items">
						<div className="container">
							<ContactUs/>
							<div className="answer-to-questions">
								<div className="title">
									<h1>savollaringiz bormi?</h1>
									<p>Hoziroq biz bilan bog'laning</p>
								</div>
								<a href='tel:+998885111166' className="phone-number">+998 (88) 511 11 66</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Haj