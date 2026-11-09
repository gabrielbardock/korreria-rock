import logo from "../../../assets/logo-branca.png";
import { ArrowIcon } from "../shared/Icons";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="eyebrow"><span className="live-dot" /> Rock nacional e internacional</p>
        <img className="hero-logo" src={logo} alt="Korreria Rock" />
        <h1>O rock está <span>mais vivo do que nunca.</span></h1>
        <div className="hero-actions">
          <a className="button button-red" href="#agenda">Veja a agenda <ArrowIcon /></a>
          <a className="text-link" href="#sobre">Conheça a banda <ArrowIcon /></a>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre"><span /> Desça para conhecer</a>
      <p className="hero-side-note">DO PALCO<br />PRA VOCÊ</p>
    </section>
  );
}

export default Hero;
