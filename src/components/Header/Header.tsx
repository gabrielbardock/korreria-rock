import { useState } from "react";
import logo from "../../../assets/logo-branca.png";
import { ArrowIcon } from "../shared/Icons";
import "./Header.scss";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "A banda", href: "#sobre" },
  { label: "Integrantes", href: "#integrantes" },
  { label: "Agenda", href: "#agenda" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Korreria Rock — início"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Korreria Rock" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="https://wa.me/5516981375929"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Contrate a banda <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
