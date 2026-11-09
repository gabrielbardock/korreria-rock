import { ArrowIcon } from "../shared/Icons";
import "./About.scss";

function About() {
  return (
    <section className="intro section-wrap" id="sobre">
      <div className="section-label"><span>01</span> QUEM SOMOS</div>
      <div className="intro-content">
        <h2>Sobre a<br /><span>Korreria Rock.</span></h2>
        <div className="intro-text">
          <p>
            Somos apaixonados por rock nacional e internacional de todas as épocas.
            Com energia contagiante, levamos grandes clássicos aos palcos e criamos
            experiências musicais únicas.
          </p>
          <p>
            De hinos dos anos 80 aos hits mais recentes, nosso repertório une gerações.
            O palco é nossa casa, e cada show é uma celebração da autenticidade do rock.
            Junte-se à Korreria Rock.
          </p>
          <a className="text-link red-link" href="#integrantes">Essa é a Korreria <ArrowIcon /></a>
        </div>
      </div>
      <div className="value-strip">
        <div><strong>80, 90, 2000<span>’</span>s</strong><span>Hinos que marcaram época</span></div>
        <div><strong>100<span>%</span></strong><span>Energia em cada show</span></div>
        <div><strong>∞</strong><span>Rock sem data de validade</span></div>
      </div>
    </section>
  );
}

export default About;
