import { Link } from "react-router-dom";
import S from "./notFound.module.scss";

export default function NotFound() {
  return (
    <main className={S.main}>
      <p className={S.code}>404</p>
      <h1>Página não encontrada</h1>
      <p>
        O endereço informado não existe ou pode ter sido alterado.
      </p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  );
}
