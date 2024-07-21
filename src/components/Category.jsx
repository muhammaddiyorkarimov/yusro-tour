import './styles/category.css'
import images from './../images/index';
import Title from '../ui/Title';

function Category() {
	return (
		<div className='category'>
			<div className="container">
				<Title img={images.kabah} title="Bizning takliflar" description="Biz sizga ishonchli bo'lgan xizmatlarni taklif qilamiz" />
				<div className="cards">
					<div className="card">
						<div className="header-image">
							<img src={images.categoryCard1} alt="" />
						</div>
						<img src={images.kabahWrapper} alt="" className='header-image-icon' />
						<div className="title">Umra taklifi</div>
						<div className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam ducimus iusto quasi modi? Incidunt ut perspiciatis dolore aut autem.
						</div>
					</div>
					<div className="card">
						<div className="header-image">
							<img src={images.categoryCard2} alt="" />
						</div>
						<img src={images.kabahWrapper} alt="" className='header-image-icon' />
						<div className="title">Umra taklifi</div>
						<div className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam ducimus iusto quasi modi? Incidunt ut perspiciatis dolore aut autem.
						</div>
					</div>
					<div className="card">
						<div className="header-image">
							<img src={images.categoryCard3} alt="" />
						</div>
						<img src={images.kabahWrapper} alt="" className='header-image-icon' />
						<div className="title">Umra taklifi</div>
						<div className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam ducimus iusto quasi modi? Incidunt ut perspiciatis dolore aut autem.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Category