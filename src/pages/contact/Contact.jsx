import ExtraPagesHeader from '../../components/ExtraPagesHeader'
import images from '../../images'
import UiInput from '../../ui/UiInput'
import './contact.css'

function Contact() {
	return (
		<div className='contact-page'>
			<ExtraPagesHeader />

			<div className="container">
				<div className="contact-wrapper">
					<div className="contact-info">
						<div className="title">
							<p>Biz bilan aloqada bo'ling</p>
						</div>
						<div className="details">
							<div className="detail">
								<img src={images.location2} alt="" />
								<div className="about">
									<span>Bizning manzil</span>
									<p>Farg'ona vilyati farg'ona shahar</p>
								</div>
							</div>
							<div className="detail">
								<img src={images.phone} alt="" />
								<div className="about">
									<span>24/7 aloqada</span>
									<p>+998 (88) 511 11 66</p>
								</div>
							</div>
							<div className="detail">
								<img src={images.message} alt="" />
								<div className="about">
									<span>Bizga xabar qoldiring</span>
									<p>admin@yusro.uz</p>
								</div>
							</div>
						</div>
					</div>
					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59915.49844840892!2d69.20407624303485!3d41.31115128493007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4e71171a0e5%3A0x7d64b1d6d5e1c0f4!2z0J3QsNGI0LrQtdC90LjRhtC60LDRjywg0KLQvtC00LDQvQ!5e0!3m2!1suz!2s!4v1688476828371!5m2!1suz!2s"

							width="600"
							height="400"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="Google Map"
						></iframe>
					</div>
				</div>
				<div className="contact-form">
					<h2>Bizga xabar yuboring</h2>
					<form>
						<div className="form-group">
							<UiInput type='text' placeholder='Ism' />
							<UiInput type='email' placeholder='Email pochta' />
						</div>
						<div className="form-group">
							<UiInput type='text' placeholder='Telefon Raqam' />
							<UiInput type='text' placeholder='Xabarning maqsadi' />
						</div>
						<div className="form-group">
							<textarea placeholder="Xabar Yozing" required></textarea>
						</div>
						<button type="submit">Yuborish</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact