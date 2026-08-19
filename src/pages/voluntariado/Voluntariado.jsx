import InfoCard from "../../components/infoCard/infoCard";
import AuladeInformatica from "../../assets/img/auladeinformatica.jpg";
import Reciclagem from "../../assets/img/mutirao-reciclagem.webp";
import EsporteInclusao from "../../assets/img/esporte-inclusao.webp";
import S from "../../styles/catalogPage.module.scss";

export default function Voluntariado() {
  return (
    <main className={S.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard
            img={Reciclagem}
            alt="Jovens em mutirão de reciclagem"
            subtitulo="Mutirão de Reciclagem"
            paragrafo="Colete materiais recicláveis e oriente a comunidade sobre descarte consciente."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={AuladeInformatica}
            alt="Jovens em aula de informática"
            subtitulo="Aulas de Tecnologia"
            paragrafo="Ensine informática, internet segura e programação para preparar jovens para o mercado digital."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={EsporteInclusao}
            alt="Jovens participando de uma atividade esportiva inclusiva"
            subtitulo="Esporte e Inclusão"
            paragrafo="Organize atividades que promovam disciplina, saúde, participação e trabalho em equipe."
            textBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
