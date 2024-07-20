import Breadcrumb from '../helpers/Breadcrumb'
import './styles/extraPagesHeader.css'

function ExtraPagesHeader({ title }) {
	return (
		<div className='extra-pages-header'>
			<div className="container">
				<div className="about">
					<div className="title">{title}</div>
					<div className="bread-crumb">
						<Breadcrumb />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExtraPagesHeader