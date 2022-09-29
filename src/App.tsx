import { accessory } from "./data/accessory";

import Button from "./components/Button"
import Navbar from "./components/Navbar"
import AccessoryCard from "./components/AccessoryCard";

import Gift from './assets/images/send-gift.png';
import Donation from './assets/images/send-gift-2.png';
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <div className="hero__title">
              <h2>Feliz Natal e Feliz Ano Novo!</h2>
            </div>
            <div className="hero__text">
              <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
            </div>
            <Button />
          </div>

          <div className="hero__image">
            <img src={Gift} alt="Presente" />
          </div>
        </div>
      </section>

      <section id="accessories">
        <div className="container">
          <div className="accessories__title">
            <h2>Acessórios</h2>
            <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
          </div>

          <div className="accessories__content">
            {
              accessory.map(item => (
                <AccessoryCard key={item.id} acc={item} />
              ))
            }
          </div>
        </div>
      </section>

      <section id="donation">
        <div className="container">
            <div className="donation__image">
              <img src={Donation} alt="Doação" />
            </div>

            <div className="donation__content">
              <h2>Comemore com muito amor!</h2>
              <p>Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal.</p>
              <Button />
            </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
