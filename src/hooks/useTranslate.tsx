import { useTranslation } from "react-i18next";

export function useTranslate() {
  const { t } = useTranslation();

  function translate(key: string) {
    return t(key);
  }

  return translate;
}
