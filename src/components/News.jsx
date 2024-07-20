import images from '../images'
import Title from '../ui/Title'
import './styles/news.css'

function News() {
	return (
		<div className='news'>
			<div className="container">
				<Title img={images.kabah} title="So'ngi yangiliklar va maslahatlar" description="Haqiqiy manbalardan olingan eng yangi postlari va so'ngi yangiliklar" />
				<div className="news-wrapper">
					<div className="card">
						<div className="header-image">
							<span>21-oktabr</span>
							<img src={images.nabwi1} alt="" />
						</div>
						<div className="news-info">
							<div className="title">
								<div className="user">
									<img src={images.user} alt="" />
									<span>Adam Hirachin</span>
								</div>
								<div className="comment">
									<img src={images.message2} alt="" />
									<span>3 comments</span>
								</div>
							</div>
							<div className="description">
								<p>Umra mavsumi qachon boshlanadi</p>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="header-image">
							<span>21-oktabr</span>
							<img src={images.nabwi1} alt="" />
						</div>
						<div className="news-info">
							<div className="title">
								<div className="user">
									<img src={images.user} alt="" />
									<span>Adam Hirachin</span>
								</div>
								<div className="comment">
									<img src={images.message2} alt="" />
									<span>3 comments</span>
								</div>
							</div>
							<div className="description">
								<p>Umra mavsumi qachon boshlanadi</p>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="header-image">
							<span>21-oktabr</span>
							<img src={images.nabwi1} alt="" />
						</div>
						<div className="news-info">
							<div className="title">
								<div className="user">
									<img src={images.user} alt="" />
									<span>Adam Hirachin</span>
								</div>
								<div className="comment">
									<img src={images.message2} alt="" />
									<span>3 comments</span>
								</div>
							</div>
							<div className="description">
								<p>Umra mavsumi qachon boshlanadi</p>
							</div>
						</div>
					</div>
				</div>
				<button>Ko'proq o'qish</button>
			</div>
		</div>
	)
}

export default News