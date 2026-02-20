import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import S from "./header.module.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }

    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  return (
    <>
      <header className={S.header}>
        <section>
          <Link to="/">
            <img
              className={S.imgLogo}
              src={Logo}
              alt="Imagem de logo do site sendo representada por uma mão segurando um coração, simbolizando apoio"
            />
          </Link>
        </section>
        {!isMobile && (
          <nav className={S.nav}>
            <Link className={S.link} to="/doacao">
              Doação
            </Link>
            <Link className={S.link} to="/voluntariado">
              Voluntariado
            </Link>
            <Link className={S.link} to="/mentoria">
              Mentorias
            </Link>
            <Link className={S.link} to="/eventos">
              Eventos & Palestras
            </Link>
          </nav>
        )}
        <img
          className={S.imgUser}
          src="https://media.licdn.com/dms/image/v2/D4D03AQGzzpIcOvxMYQ/profile-displayphoto-scale_400_400/B4DZfHUOo.GYAk-/0/1751395659198?e=1773273600&v=beta&t=lwRvPwz7z0fsA76MdvpKyOAlTJp2ZwwB0qU6QCmvCzE"
          alt=""
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? S.navUser : S.closedNav}>
        <Link to={"/usuario"}>Jéssica Trindade</Link>
        <Link>Meu Voluntariado</Link>
        <Link>Configurações de conta</Link>
        {isMobile && (
          <div>
            <Link
              className={S.link}
              to="/doacao"
              onClick={() => setMenuAberto(false)}
            >
              Doação
            </Link>
            <Link
              className={S.link}
              to="/voluntariado"
              onClick={() => setMenuAberto(false)}
            >
              Voluntariado
            </Link>
            <Link
              className={S.link}
              to="/mentoria"
              onClick={() => setMenuAberto(false)}
            >
              Mentorias
            </Link>
            <Link
              className={S.link}
              to="/eventosEP"
              onClick={() => setMenuAberto(false)}
            >
              Eventos
            </Link>
          </div>
        )}

        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
}