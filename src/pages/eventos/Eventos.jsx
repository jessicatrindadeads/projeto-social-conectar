import React from "react";
import InfoCard from "../../components/infoCard/infoCard";
import S from './eventos.module.scss';
import jovens from '../../assets/img/jovens.jpg';
import tecnologia from '../../assets/img/tecnologia.jpg';
import reuniao from '../../assets/img/reuniao.png';

export default function Eventos() {
  return (
    <main className={S.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article>
          <InfoCard 
          img = {jovens}
          alt='Imagem de jovens participando de uma palestra'    
          subtitulo='Empoderando Jovens para o Futuro'
          paragrafo='Atividade: Palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.'
          textBotao='Quero Participar'      
          />          
        </article>
        <article>
          <InfoCard 
          img = {tecnologia}
          alt='Imagem de jovens participando de um workshop de tecnologia'    
          subtitulo='Tecnologia que Transforma'
          paragrafo='Atividade: Workshop de introdução à programação e inovação digital. Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.'
          textBotao='Quero Participar'      
          />                        
        </article>
        <article>
          <InfoCard 
          img = {reuniao}
          alt='Imagem de jovens participando de uma reunião com profissionais de RH para aprender sobre carreira'    
          subtitulo='Carreira e Primeiro Emprego'
          paragrafo='Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: Ajudar jovens a conquistar oportunidades de trabalho.'
          textBotao='Quero Participar'      
          />
        </article>
      </section>
    </main>
  );
}