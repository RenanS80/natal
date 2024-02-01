import Brand from '../Brand';

import Twitter from '../../assets/images/twitter.svg';
import Whatsapp from '../../assets/images/whatsapp.svg';
import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';
import Google from '../../assets/images/google.svg';

import './styles.css';

function Footer() {
    return (
        <footer id="contact">
            <div className="container">
                <div className="contact__brand">
                    <Brand />
                </div>

                <div className="contact__social-media">
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="#link" target="_blank" className="contact__social-media-background">
                        <img src={Google} alt="Google" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;