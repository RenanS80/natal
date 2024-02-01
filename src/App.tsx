import Brand from "./components/Brand";
import Button from "./components/Button"
import Footer from "./components/Footer";

import HeroImgLg from './assets/images/hero-lg.png';
import HeroImgSm from './assets/images/hero-sm.png';
import DonationLg from './assets/images/donation-lg.png';
import DonationSm from './assets/images/donation-sm.png';
import { useEffect, useState } from "react";


function App() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let now = new Date();
  let actualYear = new Date().getFullYear();
  let countdownDate = new Date(`12/25/${actualYear}`);

  // Checar se a data é posterior ao natal no ano corrente (26 a 31 de dezembro)
  if (now.getMonth() == 11 && now.getDate() > 25) {
    countdownDate.setFullYear(countdownDate.getFullYear() + 1);
  }

  let countdown = new Date(countdownDate).getTime();
  let difference = countdown - now.getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  });
  
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <div className="hero__logo">
              <Brand />
            </div>
            <div className="hero__title">
              <h2>Uma <span>plataforma de doação</span> para espalhar alegria</h2>
            </div>
            <div className="hero__text">
              <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
            </div>
            <div className="hero__btn">
              <Button />
            </div>
          </div>

          <picture className="hero__image">
            <source srcSet={HeroImgLg} media="(min-width: 1100px)" />
            <img src={HeroImgSm} alt="Presente" />
          </picture>
        </div>
      </section>

      <section id="countdown">
        <div className="container">
          <div className="countdown__title">
            <h2>Tempo limitado</h2>
            <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
          </div>

          <div className="countdown__content">
            <span>{days < 10 ? "0" + days : days}d - {hours < 10 ? "0" + hours : hours}h - {minutes < 10 ? "0" + minutes : minutes}m - {seconds < 10 ? "0" + seconds : seconds}s</span>
          </div>
        </div>
      </section>

      <section id="donation">
        <div className="container">
          <picture className="donation__image">
            <source srcSet={DonationLg} media="(min-width: 1100px)" />
            <img src={DonationSm} alt="Doação" />
          </picture>

          <div className="donation__content">
            <h2>Conectando generosidade ao redor do mundos</h2>
            <p>Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito da generosidade.</p>
            <div className="donation__btn">
              <Button />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
