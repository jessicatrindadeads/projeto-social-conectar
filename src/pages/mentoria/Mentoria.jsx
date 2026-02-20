import InfoCard from "../../components/infoCard/infoCard";
import S from './mentoria.module.scss';
import ReuniaoMentoria from '../../assets/img/reuniaomentoria.jpg';
import ReuniaoAcompanhamento from '../../assets/img/reuniaoacompanhamento.png';
import JovensCarreira from '../../assets/img/jovenscarreira.png';

export default function Mentoria() {
  return (
    <main className={S.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard 
          img = {ReuniaoMentoria}
          alt='Imagem de jovens em uma reunião de mentoria'    
          subtitulo='Mentoria de Carreira e Emprego'
          paragrafo='Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.'
          textBotao='Quero Participar'      
          />          
        </article>
        <article>
          <InfoCard 
          img = {JovensCarreira}
          alt='Imagem de jovens compartilhando experiência'    
          subtitulo='Compartilhe Experiência'
          paragrafo='Oriente jovens e profissionais iniciantes em sua área.'
          textBotao='Quero Participar'            
          />                        
        </article>
        <article>
          <InfoCard 
          img = {ReuniaoAcompanhamento}
          alt='Imagem de jovens em acompanhamento profissional'    
          subtitulo='Acompanhamento'
          paragrafo='Participe como guia em jornadas de aprendizado e desenvolvimento.'
          textBotao='Quero Participar'            
          />
        </article>
      </section>
    </main>
  );
}