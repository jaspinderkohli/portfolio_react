import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faPython, faAngular, faDocker, faCss3,} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faPython, faAngular, faDocker, faCss3);
}
export default initFontAwesome;

// <FontAwesomeIcon icon={['fab', 'angular']}