import InfoCard from "../../components/infoCard/infoCard";
import JovensCarreira from "../../assets/img/jovenscarreira.png";
import ReuniaoAcompanhamento from "../../assets/img/reuniaoacompanhamento.png";
import ReuniaoMentoria from "../../assets/img/reuniaomentoria.jpg";
import S from "../../styles/catalogPage.module.scss";

export default function Mentoria() {
  return (
    <main className={S.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={ReuniaoMentoria}
            alt="Jovens em uma reunião de mentoria"
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={JovensCarreira}
            alt="Jovens compartilhando experiências"
            subtitulo="Compartilhe Experiência"
            paragrafo="Oriente jovens e profissionais iniciantes em sua área de atuação."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={ReuniaoAcompanhamento}
            alt="Jovens em acompanhamento profissional"
            subtitulo="Acompanhamento"
            paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
