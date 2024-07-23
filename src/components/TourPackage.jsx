import './styles/tourPackage.css'
import images from './../images/index';
import TourPackages from './TourPackages';

function TourPackage() {
	return (
		<div className='tour-package'>
			<div className="tour-offer">
				<div className="main-image">
					<img src={images.categoryCard1} alt="" />
				</div>
				<div className="title">
					<h1>Haj taklifi</h1>
				</div>
				<div className="description">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab perspiciatis recusandae possimus dolor molestiae expedita est, consequatur tempora saepe ullam eos dolore, ipsam soluta neque quidem placeat tenetur, nulla debitis. Ad rem quam, aliquid vel qui officia laudantium quos assumenda magnam consectetur debitis perspiciatis dolor obcaecati consequatur blanditiis. Voluptate dolor libero pariatur dolores. Numquam, excepturi voluptatem tempore ducimus labore molestias porro odio repellat natus nemo enim ab error odit sunt maiores dicta commodi vitae. Illo doloremque reiciendis ipsum soluta hic laudantium, voluptatum nostrum dolore cumque, facilis mollitia sint sunt obcaecati autem et perferendis, dolorem aut nisi temporibus doloribus beatae? Nam accusamus facere provident exercitationem incidunt, dignissimos mollitia explicabo, perspiciatis sapiente optio praesentium tempore quo odio nobis nulla quam minus asperiores! Natus labore autem ducimus aut id aliquid quibusdam eveniet sit repellat nemo laudantium veniam quas similique, accusamus consequatur officiis molestias optio ad exercitationem, voluptates, nulla est impedit earum! Quaerat, commodi. Est voluptas eius necessitatibus repellat, eligendi nostrum neque corrupti fuga voluptates obcaecati doloremque maiores libero perspiciatis magnam sit quia? Assumenda maxime explicabo, possimus officiis mollitia voluptatem corrupti officia error, excepturi veniam alias earum. Id, porro asperiores optio blanditiis voluptatibus, rem repellendus laborum, qui iste facilis dicta molestiae dolorum distinctio!</p>
				</div>
				<ul className='tour-package-ul'>
					<span>O'z ichiga oladi:</span>
					<li><i className="fa-solid fa-check"></i> Paket Davomiyligi: (10-14 Day)</li>
					<li><i className="fa-solid fa-check"></i> Besh yulduzli mehmonxonada turar joy</li>
					<li><i className="fa-solid fa-check"></i> Shaxsiy Hojiboshi bilan bo'ling</li>
					<li><i className="fa-solid fa-check"></i> Shaxsiy VIP avtobuslardan foydalaning</li>
				</ul>
			</div>
			<div className="tour-package-items">
				<div className="title">
					<h1>Haj paketlari</h1>
				</div>
				<div className="description">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus iusto sit laudantium. Libero perferendis enim harum porro! Doloribus consequuntur officia, et labore eius dolores voluptas asperiores quisquam aliquid molestias!</p>
				</div>
				{/* <TourPackages/> */}
			</div>
		</div>
	)
}

export default TourPackage