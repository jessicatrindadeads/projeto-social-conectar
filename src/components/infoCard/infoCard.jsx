import S from "./infoCard.module.scss";

export default function InfoCard({
  img,
  alt,
  subtitulo,
  paragrafo,
  textBotao,
}) {
  return (
    <div className={S.card}>
      <img src={img} alt={alt} loading="lazy" />
      <h2>{subtitulo}</h2>
      <p>{paragrafo}</p>
      <button type="button">{textBotao}</button>
    </div>
  );
}
