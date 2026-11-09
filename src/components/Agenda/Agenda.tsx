import { ArrowIcon } from "../shared/Icons";
import "./Agenda.scss";

function Agenda() {
  return (
    <section className="agenda-section section-wrap" id="agenda">
      <div className="section-label"><span>03</span> PRÓXIMOS SHOWS</div>
      <div className="agenda-card">
        <div className="agenda-stamp" aria-hidden="true">AO<br />VIVO</div>
        <div className="agenda-copy">
          <p className="eyebrow">A GENTE SE VÊ NA FRENTE DO PALCO</p>
          <h2>A próxima noite<br />de rock começa <span>aqui.</span></h2>
          <p>Estamos preparando os próximos shows. Enquanto isso, chama a gente para levar a Korreria até o seu evento.</p>
          <a className="button button-red" href="https://wa.me/5516981375929" target="_blank" rel="noreferrer">
            Quero contratar a banda <ArrowIcon diagonal />
          </a>
        </div>
        <div className="agenda-note">
          <span className="note-line" />
          <span>AGENDA<br />EM BREVE</span>
          <span className="note-line" />
        </div>
      </div>
    </section>
  );
}

export default Agenda;
