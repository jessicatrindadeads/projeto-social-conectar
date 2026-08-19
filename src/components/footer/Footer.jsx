import S from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={S.footer}>
      <p>
        © {new Date().getFullYear()} Vai na Web & Empower. Todos os direitos
        reservados. Projeto desenvolvido para fins educacionais.
      </p>
    </footer>
  );
}
