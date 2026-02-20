import S from "./usuario.module.scss";
import Mapa from "../../assets/img/Mapa.png";
import Carta from "../../assets/img/carta.png";
import Calendario from "../../assets/img/calendario.png";

export default function Perfil() {
  return (
    <main className={S.container}>
      <section className={S.card}>
        <div className={S.imagemPerfil}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGzzpIcOvxMYQ/profile-displayphoto-scale_400_400/B4DZfHUOo.GYAk-/0/1751395659198?e=1773273600&v=beta&t=lwRvPwz7z0fsA76MdvpKyOAlTJp2ZwwB0qU6QCmvCzE"
            alt="Foto do usuário"
          />
        </div>

        <div className={S.info}>
          <h1>Jéssica Trindade</h1>

          <p className={S.status}>Voluntária Ativa</p>

          <p className={S.descricao}>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca
            de novas oportunidades para ajudar.
          </p>

          <ul className={S.informacoes}>
            <li>
              <img src={Mapa} alt="Ícone de mapa" />
              Guarujá, SP
            </li>

            <li>
              <img src={Carta} alt="Ícone de carta" />
              jessica.trindade@gmail.com
            </li>

            <li>
              <img src={Calendario} alt="Ícone de calendário" />
              Membro desde Janeiro 2022
            </li>
          </ul>

          <ul className={S.tags}>
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
