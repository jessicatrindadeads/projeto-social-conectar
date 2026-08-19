import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import S from "./header.module.scss";

const links = [
  { to: "/doacao", label: "Doação" },
  { to: "/voluntariado", label: "Voluntariado" },
  { to: "/mentoria", label: "Mentorias" },
  { to: "/eventos", label: "Eventos & Palestras" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuAberto(false);
  }, [pathname]);

  useEffect(() => {
    function fecharComEscape(event) {
      if (event.key === "Escape") setMenuAberto(false);
    }

    window.addEventListener("keydown", fecharComEscape);
    return () => window.removeEventListener("keydown", fecharComEscape);
  }, []);

  return (
    <header className={S.header}>
      <Link className={S.logoLink} to="/" aria-label="Conectar — página inicial">
        <img className={S.imgLogo} src={Logo} alt="Conectar" />
      </Link>

      <nav className={S.navDesktop} aria-label="Navegação principal">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              `${S.link} ${isActive ? S.active : ""}`
            }
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Link className={S.profileLink} to="/usuario" aria-label="Abrir perfil de Jéssica Trindade">
        <img
          className={S.imgUser}
          src="https://avatars.githubusercontent.com/u/141635580?v=4"
          alt=""
        />
      </Link>

      <button
        className={S.menuButton}
        type="button"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
        aria-controls="menu-mobile"
        onClick={() => setMenuAberto((aberto) => !aberto)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="menu-mobile"
        className={menuAberto ? S.navMobile : S.closedNav}
        aria-label="Navegação mobile"
      >
        <NavLink className={S.mobileLink} to="/">
          Home
        </NavLink>
        {links.map(({ to, label }) => (
          <NavLink key={to} className={S.mobileLink} to={to}>
            {label}
          </NavLink>
        ))}
        <NavLink className={S.mobileLink} to="/usuario">
          Meu perfil
        </NavLink>
      </nav>
    </header>
  );
}
