import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

function News() {
    return (
        <div className="news-section">
            <h2 className='mb-2'>News</h2>
            <div className="container">
                <div className="row">
                    <div className='col-lg-4 mb-4'>
                        <div className="card h-100">
                            <div className="card-header">
                                <img height={"300"}
                                    src="https://science.nasa.gov/wp-content/uploads/2023/06/solar-system-model.jpg?w=4096&format=jpeg"
                                    className="card-img-top"
                                    alt="Space News" />
                            </div>
                            <div className="card-body">
                                <h2 className='card-title'>Inner Solar System</h2>
                                <h4 className='card-subtitle text-mute mt-2'>Bassant Badawy</h4>
                            </div>
                            <div className="card-footer">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/drive/folders/1yfTY0MNKU9xeQxVbkQ-trzydyClGQJ4M"
                                    className="btn w-100 d-block"
                                >
                                    <FontAwesomeIcon icon={faGoogleDrive} /> Research
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-4'>
                        <div className="card h-100">
                            <div className="card-header">
                                <img height={"300"}
                                    src="https://spacenews.com/wp-content/uploads/2019/09/30-years-of-covers-web-879x485.jpg"
                                    className="card-img-top"
                                    alt="Space News" />
                            </div>
                            <div className="card-body">
                                <h2 className='card-title'>Near-Earth Objects</h2>
                                <h4 className='card-subtitle text-mute mt-2'>Wessam</h4>
                            </div>
                            <div className="card-footer">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/drive/folders/1ylLm61atDPYdEPWWNUtk220glwdheGbL"
                                    className="btn w-100 d-block"
                                >
                                    <FontAwesomeIcon icon={faGoogleDrive} /> Research
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-4'>
                        <div className="card h-100">
                            <div className="card-header">
                                <img height={"300"}
                                    src="https://img.freepik.com/premium-photo/big-asteroid-space-potentially-hazardous-asteroids-asteroid-outer-space_337384-2794.jpg"
                                    className="card-img-top"
                                    alt="Space News" />
                            </div>
                            <div className="card-body">
                                <h2 className='card-title'>Potential Hazardous Asteroids</h2>
                                <h4 className='card-subtitle text-mute mt-2'>Sama Ibrahim</h4>
                            </div>
                            <div className="card-footer">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/drive/folders/1ypzvXml3qgzDprS8_BmzlOiMDKKkiX6i"
                                    className="btn w-100 d-block"
                                >
                                    <FontAwesomeIcon icon={faGoogleDrive} /> Research
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default News;