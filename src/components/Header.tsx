import i18n from "i18next";

export default function Header() {
  function mudarIdioma(language: string) {
    i18n.changeLanguage(language);
  }
  return (
    <>
      <button onClick={() => mudarIdioma("en")}>en</button>
      <button onClick={() => mudarIdioma("pt-BR")}>pt-BR</button>
    </>
  );
}
