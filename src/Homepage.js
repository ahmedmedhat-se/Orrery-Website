import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive, faReact } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
function Homepage() {
    return (
        <>
            <div className="homepage-section">
                <div className="container">
                    <h2>Homepage</h2>
                    <div className="row mb-4">
                        <div className="col-lg-4 mt-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img height={"300"}
                                        src="https://spacenews.com/wp-content/uploads/2019/09/30-years-of-covers-web-879x485.jpg"
                                        className="card-img-top"
                                        alt="Space News" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Space<span>News</span></h3>
                                    <h4 className='card-subtitle text-mute mt-2'>Ahmed Medhat</h4>
                                    <p className="card-text">Our team is excitedly exploring new 🪐 in space,
                                        conducting scientific research on recently discovered 🌟, 🪐, and 🌌.
                                        We're uncovering cosmic secrets with every new 🚀 and telescope observation.🚀</p>
                                </div>
                                <div className="card-footer">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://drive.google.com/drive/folders/1y9l_5P36-lh2sW_Gxzhfe4b17l9-yCfg"
                                        className="btn"
                                    >
                                        <FontAwesomeIcon icon={faGoogleDrive} /> Scientific Papers
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img height={"300"}
                                        src="https://mrwallpaper.com/images/high/4k-ultra-hd-galaxy-heavenly-bodies-xrekpipn9uxke9w9.jpg"
                                        className="card-img-top"
                                        alt="Celestial Bodies" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Explore <span>Celestial Bodies!</span></h3>
                                    <p className="card-text">Our team is creating an immersive 3D model 🌌
                                        for users to explore space 🚀 and learn about celestial bodies ✨,
                                        providing detailed information
                                        and enhancing their cosmic understanding 🌍.</p>
                                </div>
                                <div className="card-footer">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://ahmedmedhat-se.github.io/3D-Interactive-Solar-System/"
                                        className="btn"
                                    >
                                        <FontAwesomeIcon icon={faRocket} /> Explore Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <img height={"300"}
                                        src="https://i.pinimg.com/736x/79/01/cf/7901cfca8dabc18f12085be7ad9e600a.jpg"
                                        className="card-img-top"
                                        alt="Celestial Bodies" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Explore <span>NEO!</span></h3>
                                    <p className="card-text">Our team has developed a 3D model 🌍🛸
                                        for exploring Near-Earth Objects (NEO) ☄️ and nearby asteroids 🌟,
                                        providing detailed information 📚 to enhance users' knowledge and understanding
                                        of these space threats 🚀.</p>
                                </div>
                                <div className="card-footer">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://ahmedmedhat-se.github.io/NEO/"
                                        className="btn"
                                    >
                                        <FontAwesomeIcon icon={faUserAstronaut} /> Explore Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <News />
                </div>
            </div>
        </>
    )
};

export default Homepage;