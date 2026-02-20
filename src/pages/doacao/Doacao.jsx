import InfoCard from "../../components/infoCard/infoCard";
import S from './doacao.module.scss';
import iGFamilia from '../../assets/img/iGFamilia.jpg';
import pFEscola from '../../assets/img/pFEscola.jpg';
import instituto from '../../assets/img/instituto.png';

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard 
          img = {iGFamilia}
          alt='Imagem representando uma família recebendo doações'    
          subtitulo='Instituto grande familia'
          paragrafo='Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.'
          textBotao='Quero Doar'      
          />          
        </article>
        <article>
          <InfoCard 
          img = {pFEscola}
          alt='Imagem de livros representando o futuro da educação'    
          subtitulo='Projeto Futuro na Escola'
          paragrafo='Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.'
          textBotao='Quero Doar'      
          />                        
        </article>
        <article>
          <InfoCard 
          img = {instituto}
          alt='Imagem representando jovens estudando e se desenvolvendo'    
          subtitulo='Instituto Conecta Jovem'
          paragrafo='Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.'
          textBotao='Quero Doar'      
          />
        </article>
      </section>
    </main>
  );
}