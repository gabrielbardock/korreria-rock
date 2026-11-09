import logo from "../../../assets/logo-branca.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#inicio"><img src={logo} alt="Korreria Rock" /></a>
        <p><span>© {new Date().getFullYear()} Korreria Rock</span></p>
        <a className="back-top" href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
