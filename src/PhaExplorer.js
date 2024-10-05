import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

function PhaExplorer() {
    return (
        <div className="cosmic-explorer embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item w-100 d-block"
                src="https://ahmedmedhat-se.github.io/NEO/"
                allowFullScreen
                title="NEO Explorer Video"
            ></iframe>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ahmedmedhat-se.github.io/NEO/"
                className="btn"
            >
                <FontAwesomeIcon icon={faGlobe} /> Full View
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/drive/folders/1u81rvEv_bqf_JpodCSZwJkmrzIQF0YtH"
                className="btn"
            >
                <FontAwesomeIcon icon={faGoogleDrive} /> Research
            </a>
        </div>
    )
};

export default PhaExplorer;