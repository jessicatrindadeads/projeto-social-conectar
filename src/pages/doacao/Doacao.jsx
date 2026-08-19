import InfoCard from "../../components/infoCard/infoCard";
import iGFamilia from "../../assets/img/iGFamilia.jpg";
import instituto from "../../assets/img/instituto.png";
import pFEscola from "../../assets/img/pFEscola.jpg";
import S from "../../styles/catalogPage.module.scss";

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
            img={iGFamilia}
            alt="Família recebendo doações"
            subtitulo="Instituto Grande Família"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textBotao="Quero doar"
          />
        </article>
        <article>
          <InfoCard
            img={pFEscola}
            alt="Livros representando o futuro da educação"
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            textBotao="Quero doar"
          />
        </article>
        <article>
          <InfoCard
            img={instituto}
            alt="Jovens estudando e se desenvolvendo"
            subtitulo="Instituto Conecta Jovem"
            paragrafo="Doe computadores usados, tablets ou celulares em bom estado para ampliar o acesso de jovens ao mundo digital."
            textBotao="Quero doar"
          />
        </article>
      </section>
    </main>
  );
}
