import Calendario from "../../assets/img/calendario.png";
import Carta from "../../assets/img/carta.png";
import Mapa from "../../assets/img/mapa.png";
import S from "./usuario.module.scss";

export default function Usuario() {
  return (
    <main className={S.container}>
      <section className={S.card}>
        <div className={S.imagemPerfil}>
          <img
            src="https://avatars.githubusercontent.com/u/141635580?v=4"
            alt="Jéssica Trindade"
          />
        </div>

        <div className={S.info}>
          <h1>Jéssica Trindade</h1>
          <p className={S.status}>Voluntária ativa</p>
          <p className={S.descricao}>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul className={S.informacoes}>
            <li>
              <img src={Mapa} alt="" />
              Guarujá, SP
            </li>
            <li>
              <img src={Carta} alt="" />
              <a
                href="https://www.linkedin.com/in/jessicatrindadeads"
                target="_blank"
                rel="noreferrer"
              >
                Contato profissional
              </a>
            </li>
            <li>
              <img src={Calendario} alt="" />
              Membro desde janeiro de 2022
            </li>
          </ul>

          <ul className={S.tags} aria-label="Áreas de interesse">
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
