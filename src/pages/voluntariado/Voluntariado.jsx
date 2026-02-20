import React from "react";
import InfoCard from "../../components/infoCard/infoCard";
import S from './voluntariado.module.scss';
import Reciclagem from '../../assets/img/reciclagem.png';
import AuladeInformatica from '../../assets/img/auladeinformatica.jpg';
import Esporte from '../../assets/img/esporte.jpg';

export default function Voluntariado() {
  return (
    <main className={S.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard 
          img = {Reciclagem}
          alt='Imagem de jovens em mutirão de reciclagem'    
          subtitulo='Mutirão de reciclagem'
          paragrafo='Coletar materiais recicláveis e orientar sobre descarte consciente.'
          textBotao='Quero Participar'      
          />          
        </article>
        <article>
          <InfoCard 
          img = {AuladeInformatica}
          alt='Imagem de jovens em aula de informática'    
          subtitulo='Aulas de Tecnologia'
          paragrafo='Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.'
          textBotao='Quero Participar'            
          />                        
        </article>
        <article>
          <InfoCard 
          img = {Esporte}
          alt='Imagem de inclusao por meio do esporte'    
          subtitulo='Esporte e Inclusão'
          paragrafo='Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.'
          textBotao='Quero Participar'            
          />
        </article>
      </section>
    </main>
  );
}