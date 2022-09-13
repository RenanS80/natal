import SantaClaus from '../../assets/images/santa-claus.svg';

import './styles.css';

function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="header__brand">
                    <img src={SantaClaus} alt="Papai Noel" />
                    <h3>Feliz Natal</h3>
                </div>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <a href="#link">Início</a>
                        </li>
                        <li>
                            <a href="#link">Acessórios</a>
                        </li>
                        <li>
                            <a href="#link">Doação</a>
                        </li>
                        <li>
                            <a href="#link">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;