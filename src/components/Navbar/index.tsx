import Brand from '../Brand';

import './styles.css';

function Navbar() {
    return (
        <header>
            <div className="container">
                <Brand />

                <nav className="header__nav">
                    <ul>
                        <li>
                            <a href="/">Início</a>
                        </li>
                        <li>
                            <a href="#accessories">Acessórios</a>
                        </li>
                        <li>
                            <a href="#donation">Doação</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;