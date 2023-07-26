import Header from "@/components/Header";
import { useTranslate } from "@/hooks/useTranslate";

export default function LoginPage() {
  const translate = useTranslate();

  return (
    <>
      <Header />
      <p>Página de Login {translate("title")}</p>
    </>
  );
}
