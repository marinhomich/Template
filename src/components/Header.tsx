import i18n from "i18next";

export default function Header() {
  function mudarIdioma(language: string) {
    i18n.changeLanguage(language);
  }
  return (
    <>
      <button className="mt-4 mt-2" onClick={() => mudarIdioma("en")}>
        en
      </button>
      <button className="mt-1" onClick={() => mudarIdioma("pt-BR")}>
        pt-BR
      </button>
    </>
  );
}
