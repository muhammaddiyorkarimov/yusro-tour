import './styles/ourAmenities.css';
import images from '../images';
import Title from '../ui/Title';
import Loader from '../ui/Loader';
import ComfortItem from '../service/comfort';
import useFetch from './../hooks/useFetch';

function OurAmenities() {
    const { data, loading, error } = useFetch(ComfortItem.getAgencyComfort);

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

                <div style={{ paddingTop: "80px" }}>
                    <Title img={images.kabah} title="Qulayliklarimiz" description="Haj va Umra ziyoratlarini birlashtirishda yuqori tajribaga ega" />
                </div>

                <div className="amenities-grid">
                    {loading ? <Loader /> : error ? <h1 style={{textAlign: 'center'}}>{error.message}</h1> : data && data.length > 0 ? data.map(data => (
                        <div key={data.id} className="amenity-card">
                            <img src={data.image_path} alt='empty' className="amenity-image" />
                            <p>{data.description}</p>
                        </div>
                    )) : <h1>Ma'lumot mavjud emas</h1>}
                </div>
            </div>
        </div>
    );
}

export default OurAmenities;
