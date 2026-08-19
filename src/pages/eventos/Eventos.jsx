import InfoCard from "../../components/infoCard/infoCard";
import jovens from "../../assets/img/jovens.jpg";
import reuniao from "../../assets/img/reuniao.png";
import tecnologia from "../../assets/img/tecnologia.jpg";
import S from "../../styles/catalogPage.module.scss";

export default function Eventos() {
  return (
    <main className={S.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article>
          <InfoCard
            img={jovens}
            alt="Jovens participando de uma palestra"
            subtitulo="Empoderando Jovens para o Futuro"
            paragrafo="Palestra motivacional sobre liderança jovem e transformação social para inspirar agentes de mudança."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={tecnologia}
            alt="Jovens participando de um workshop de tecnologia"
            subtitulo="Tecnologia que Transforma"
            paragrafo="Workshop de introdução à programação e inovação digital para preparar jovens para o mercado."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={reuniao}
            alt="Jovens em encontro sobre carreira"
            subtitulo="Carreira e Primeiro Emprego"
            paragrafo="Encontro com profissionais de RH sobre currículo, entrevistas e postura no mercado de trabalho."
            textBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
