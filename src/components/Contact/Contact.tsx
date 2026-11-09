import { ArrowIcon } from "../shared/Icons";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-glow" />
      <div className="section-wrap contact-inner">
        <div className="section-label"><span>04</span> FALE COM A GENTE</div>
        <div className="contact-content">
          <div>
            <p className="eyebrow">SEU EVENTO MERECE UMA TRILHA SONORA</p>
            <h2>Vamos fazer<br />barulho <span>juntos?</span></h2>
          </div>
          <div className="contact-details">
            <a className="contact-item" href="https://wa.me/5516981375929" target="_blank" rel="noreferrer">
              <span className="contact-kicker">WHATSAPP / TELEFONE</span>
              <span className="contact-value">(16) 98137-5929 <ArrowIcon diagonal /></span>
            </a>
            <a className="contact-item" href="mailto:gabriel.henrique.gf01@gmail.com">
              <span className="contact-kicker">E-MAIL</span>
              <span className="contact-value">gabriel.henrique.gf01@gmail.com <ArrowIcon diagonal /></span>
            </a>
            <a className="button button-outline" href="https://wa.me/5516981375929" target="_blank" rel="noreferrer">
              Chama no WhatsApp <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
